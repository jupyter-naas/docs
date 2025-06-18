#!/usr/bin/env python3
import os
import re
import glob
from collections import defaultdict

# Configuration
BLOG_DIR = "blog"

def find_duplicate_slugs():
    """Find all duplicate slugs in blog posts"""
    slugs = defaultdict(list)
    
    # Find all markdown files in the blog directory (recursive)
    md_files = glob.glob(f"{BLOG_DIR}/**/*.md", recursive=True)
    
    print(f"Found {len(md_files)} markdown files")
    
    for md_file in md_files:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Extract slug using regex
            slug_match = re.search(r'slug:\s*[\'"]?([\w-]+)[\'"]?', content)
            if slug_match:
                slug = slug_match.group(1)
                slugs[slug].append(md_file)
    
    # Return only the duplicates
    duplicates = {slug: files for slug, files in slugs.items() if len(files) > 1}
    return duplicates

def fix_duplicate_slugs(duplicates):
    """Fix duplicate slugs by appending a number to the slug"""
    for slug, files in duplicates.items():
        print(f"\nFixing duplicate slug '{slug}' found in:")
        
        # Skip the first file (keep original slug)
        for i, file in enumerate(files[1:], 1):
            print(f"  - {file}")
            
            # Read the file content
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Create a new unique slug
            new_slug = f"{slug}-{i}"
            
            # Replace the slug in the content
            new_content = re.sub(
                r'(slug:\s*[\'"]?)[\w-]+([\'"]?)', 
                f'\\1{new_slug}\\2', 
                content, 
                count=1
            )
            
            # Write the updated content back to the file
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
                
            print(f"    ✓ Updated slug to '{new_slug}'")

def main():
    print("Checking for duplicate slugs in blog posts...")
    duplicates = find_duplicate_slugs()
    
    if duplicates:
        print(f"\nFound {len(duplicates)} duplicate slugs.")
        fix_duplicate_slugs(duplicates)
        print("\nAll duplicates have been fixed!")
    else:
        print("\nNo duplicate slugs found. All routes are unique.")

if __name__ == "__main__":
    main() 