#!/usr/bin/env python3
import os
import re
import glob
import shutil
from pathlib import Path
from datetime import datetime

# Configuration
BLOG_DIR = "blog"

def parse_date_from_filename(filename):
    """Extract date from filename format: YYYY-MM-DD-slug.md"""
    basename = os.path.basename(filename)
    date_match = re.match(r'(\d{4}-\d{2}-\d{2})-', basename)
    
    if date_match:
        date_str = date_match.group(1)
        try:
            return datetime.strptime(date_str, "%Y-%m-%d")
        except ValueError:
            print(f"Warning: Could not parse date from filename: {basename}")
    
    return None

def organize_posts():
    """Organize blog posts into year/month folders"""
    # Find all markdown files at the root of the blog directory
    md_files = glob.glob(f"{BLOG_DIR}/*.md")
    
    # Skip files that are already in subdirectories
    md_files = [f for f in md_files if '/' in f and f.count('/') == 1]
    
    print(f"Found {len(md_files)} blog posts to organize")
    
    for md_file in md_files:
        date = parse_date_from_filename(md_file)
        
        if not date:
            print(f"Skipping {md_file}: Could not determine date")
            continue
        
        # Create year/month folder
        year_month_dir = os.path.join(BLOG_DIR, f"{date.year}/{date.month:02d}")
        os.makedirs(year_month_dir, exist_ok=True)
        
        # Create index.md in the target directory
        basename = os.path.basename(md_file)
        target_file = os.path.join(year_month_dir, "index.md")
        
        # Copy the content to the new location
        shutil.copy2(md_file, target_file)
        print(f"Copied {md_file} to {target_file}")
        
        # Delete the original file (optional)
        # os.remove(md_file)
        # print(f"Deleted original file: {md_file}")

def main():
    print("Organizing blog posts into chronological folders...")
    organize_posts()
    print("\nOrganization complete!")

if __name__ == "__main__":
    main() 