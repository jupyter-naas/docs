#!/usr/bin/env python3
import csv
import os
import re
import requests
import yaml
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse
from slugify import slugify
from collections import defaultdict

# Configuration
CSV_PATH = "blog/sources/POST_JeremyRavenel.csv"
OUTPUT_DIR = "blog"
IMAGES_DIR = "static/img/blog/linkedin"
AUTHOR_ID = "jravenel"  # From your blog/authors.yml
TAGS_PATH = "blog/tags.yml"  # Path to tags.yml file

# Ensure directories exist
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

# For tracking all tags and slugs used during processing
all_tags = set()
all_slugs = defaultdict(list)

# Load existing tags if available
valid_tags = set()
tags_data = {}
try:
    with open(TAGS_PATH, 'r', encoding='utf-8') as tags_file:
        tags_data = yaml.safe_load(tags_file) or {}
        if tags_data:
            valid_tags = set(tags_data.keys())
except (FileNotFoundError, yaml.YAMLError):
    print(f"Warning: Could not load tags from {TAGS_PATH}. Will create a new file.")

def download_image(url, post_date, post_slug):
    """Download image from URL and return local path"""
    if not url or "http" not in url:
        return None
    
    try:
        # Extract filename from URL or generate one
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)
        
        # If no extension or weird filename, create a standardized one
        name, ext = os.path.splitext(filename)
        if not ext or len(ext) > 5:
            ext = ".jpg"  # Default to jpg if no extension
        
        # Create standardized filename
        filename = f"linkedin-{post_slug}{ext}"
        
        # Full path to save the image
        img_path = os.path.join(IMAGES_DIR, filename)
        
        # Download the image
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(img_path, 'wb') as img_file:
            for chunk in response.iter_content(chunk_size=8192):
                img_file.write(chunk)
        
        # Return the path to use in the blog post
        return f"/img/blog/linkedin/{filename}"
    
    except Exception as e:
        print(f"Error downloading image {url}: {e}")
        return None

def extract_title(text, max_length=70):
    """Extract title from text (first sentence or first N chars)"""
    # Try to get first sentence
    first_sentence = re.split(r'[.!?]\s', text.strip(), 1)[0]
    
    # If first sentence is short enough, use it
    if len(first_sentence) <= max_length:
        return first_sentence
    
    # Otherwise truncate and add ellipsis
    return first_sentence[:max_length-3] + "..."

def clean_tags(tags_str):
    """Clean and extract tags from string"""
    if not tags_str or tags_str == "NA":
        return []
    
    # Remove hashtags and clean
    tags = [
        tag.strip().lower().replace('#', '')
        for tag in tags_str.split()
        if tag.strip()
    ]
    
    return tags

def sanitize_yaml_string(text):
    """Make a string safe for YAML by removing problematic characters"""
    if not text:
        return ""
    
    # Remove quotes and other problematic characters
    text = text.replace('"', "")
    text = text.replace("'", "")
    text = text.replace("`", "")
    
    # Remove other potentially problematic characters
    text = re.sub(r"[^\w\s\-.,;:!?()]+", "", text)
    
    return text

def parse_date(date_str):
    """Parse date from various formats"""
    try:
        return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S%z")
    except ValueError:
        try:
            # Try without timezone
            return datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
        except ValueError:
            print(f"Could not parse date: {date_str}")
            return datetime.now()  # Fallback

def validate_tags(tags):
    """Validate tags against tags.yml and track new ones"""
    global all_tags
    
    # Add all tags to our tracking set
    all_tags.update(tags)
    
    if not valid_tags:
        return tags  # Skip validation if we don't have tags.yml loaded
    
    valid = []
    for tag in tags:
        # Check if tag exists in tags.yml
        if tag in valid_tags:
            valid.append(tag)
        else:
            print(f"Warning: Tag '{tag}' is not defined in tags.yml and will be added")
            valid.append(tag)
    
    return valid

def yaml_escape(text):
    """Escape text for safe YAML double-quoted value."""
    if not text:
        return ""
    text = text.replace('"', '\\"')
    text = text.replace('\n', ' ').replace('\r', ' ')
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def sanitize_description(text, max_length=140):
    """Sanitize description for YAML: one line, no newlines, max length."""
    return yaml_escape(text)[:max_length]

def create_markdown(row):
    """Create markdown content from CSV row"""
    # Parse the data
    text = row["TEXT"]
    published_date = parse_date(row["PUBLISHED_DATE"])
    title_raw = extract_title(text)
    
    # Sanitize title for YAML - remove all quotes and problematic chars
    title = yaml_escape(sanitize_yaml_string(title_raw))
    slug = slugify(title_raw)[:50]  # Limit slug length
    
    # Track the slug to check for duplicates
    all_slugs[slug].append(title_raw)
    
    # Format date for filename
    date_str = published_date.strftime("%Y-%m-%d")
    
    # Get or download image
    image_url = row["IMAGE_SHARED"]
    image_path = None
    if image_url and image_url != "NA":
        image_path = download_image(image_url, date_str, slug)
    
    # Extract and clean tags
    tags = clean_tags(row["TAGS"])
    
    # Add standard tags
    tags.append("linkedin")
    if "ai" in text.lower() or "artificial intelligence" in text.lower():
        tags.append("ai")
    if "ontology" in text.lower() or "ontologies" in text.lower():
        tags.append("ontology")
    
    # Remove duplicates
    tags = list(dict.fromkeys([tag for tag in tags if tag]))
    
    # Validate tags against tags.yml
    tags = validate_tags(tags)
    
    # Limit to 5 tags
    tags = tags[:5]
    
    # Create engagement summary
    views = int(row["VIEWS"]) if row["VIEWS"] and row["VIEWS"] != "NA" else 0
    likes = int(row["LIKES"]) if row["LIKES"] and row["LIKES"] != "NA" else 0
    comments = int(row["COMMENTS"]) if row["COMMENTS"] and row["COMMENTS"] != "NA" else 0
    shares = int(row["SHARES"]) if row["SHARES"] and row["SHARES"] != "NA" else 0
    
    # Create a brief description (first 140 chars) and sanitize
    description_raw = text.strip().replace("\n", " ")
    description = sanitize_description(description_raw)
    
    # Format tags as a proper YAML array with brackets - FIXED FORMAT
    tags_formatted = "[" + ", ".join(f'"{tag}"' for tag in tags) + "]"
    
    # Create the markdown content with simpler frontmatter format matching working examples
    md_content = f"""---
slug: "{slug}"
title: "{title}"
authors: ["{AUTHOR_ID}"]
tags: {tags_formatted}
description: "{description}"
"""

    if image_path:
        md_content += f'image: "{image_path}"\n'
    
    md_content += f"""---

{text}

<!-- truncate -->

---

*This post was originally published on [LinkedIn]({row["URL"]})*

**Engagement Stats:**
- 👁️ Views: {views:,}
- ❤️ Likes: {likes:,}
- 💬 Comments: {comments:,}
- 🔄 Shares: {shares:,}
"""

    return {
        "content": md_content,
        "date": date_str,
        "slug": slug
    }

def create_tags_yml():
    """Create or update tags.yml file with all collected tags"""
    # Update existing tags data with new tags
    for tag in all_tags:
        if tag not in tags_data:
            # Generate a nice capitalized name and description
            label = tag.replace('-', ' ').title()
            description = f"Content related to {label}"
            
            tags_data[tag] = {
                "label": label,
                "description": description
            }
    
    # Write tags to file
    with open(TAGS_PATH, 'w', encoding='utf-8') as f:
        yaml.dump(tags_data, f, default_flow_style=False)
    
    print(f"\nUpdated tags.yml with {len(tags_data)} tags")

def check_duplicate_slugs():
    """Check for duplicate slugs and warn the user"""
    duplicates = {slug: titles for slug, titles in all_slugs.items() if len(titles) > 1}
    
    if duplicates:
        print("\nWARNING: Found duplicate slugs which may cause routing conflicts:")
        for slug, titles in duplicates.items():
            print(f"\n  Slug: '{slug}' is used by {len(titles)} posts:")
            for i, title in enumerate(titles):
                print(f"    {i+1}. '{title}'")
        
        print("\nConsider manually editing the slug field in some of these files")
        print("You can do this by opening each file and changing the 'slug:' field to be unique")
    else:
        print("\nNo duplicate slugs found. All routes should be unique.")

def main():
    """Main function to process CSV and create markdown files"""
    print("Starting conversion of LinkedIn posts...")
    
    with open(CSV_PATH, 'r', encoding='utf-8') as csv_file:
        reader = csv.DictReader(csv_file)
        
        for row in reader:
            md_data = create_markdown(row)
            
            # Create filename with date
            filename = f"{md_data['date']}-{md_data['slug']}.md"
            filepath = os.path.join(OUTPUT_DIR, filename)
            
            # Write markdown to file
            with open(filepath, 'w', encoding='utf-8') as md_file:
                md_file.write(md_data['content'])
            
            print(f"Created post: {filename}")
    
    # Create or update tags.yml with all collected tags
    create_tags_yml()
    
    # Check for duplicate slugs and warn the user
    check_duplicate_slugs()
    
    print("Conversion complete!")

if __name__ == "__main__":
    main() 