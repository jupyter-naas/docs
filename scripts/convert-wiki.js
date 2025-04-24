const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Base URL for the wiki
const WIKI_BASE_URL = 'https://ncorwiki.buffalo.edu/index.php?title=';
const RAW_SUFFIX = '&action=raw';

// List of pages to convert - updated with all pages from the Main Page
const pages = [
  'Main_Page',
  'Main_Page#Events',
  'Main_Page#News',
  'Education',
  'Online_Courses',
  'Ontology_101',
  'Defining_Ontology',
  'Basic_Formal_Ontology_2.0',
  'Basic_Formal_Ontology_2020',
  'Buffalo_Toronto_Ontology_Alliance',
  'Why_Machines_Will_Never_Rule_the_World',
  'The_Philosophome',
  'Semantics_of_Biodiversity',
  'Finance_and_Economics',
  'Information_Ontology',
  'Military_and_Intelligence_Ontology',
  'Ontology_of_Planning',
  'Ontology_of_Engineering',
  'Materials_Ontology',
  'Ontology_for_Clinical_and_Translational_Science',
  'Microbiome_Ontology',
  'Suggested_Reading',
  'Training_Videos',
  'Studying_Ontology_in_Buffalo',
  'Past_Events'
];

// Create wiki directory if it doesn't exist
const wikiDir = path.join(__dirname, '..', 'wiki');
if (!fs.existsSync(wikiDir)) {
  fs.mkdirSync(wikiDir);
}

// Enhanced MediaWiki to Markdown converter with more patterns
async function convertPage(pageName) {
  try {
    // Get raw wiki content
    const response = await axios.get(`${WIKI_BASE_URL}${pageName}${RAW_SUFFIX}`);
    const wikiContent = response.data;
    
    // Enhanced conversion of wiki syntax to markdown
    let markdown = wikiContent
      // Headers
      .replace(/=====\s*([^=]+)\s*=====/g, '##### $1')
      .replace(/====\s*([^=]+)\s*====/g, '#### $1')
      .replace(/===\s*([^=]+)\s*===/g, '### $1')
      .replace(/==\s*([^=]+)\s*==/g, '## $1')
      .replace(/=\s*([^=]+)\s*=/g, '# $1')
      
      // Links with full URLs
      .replace(/\[http(s)?:\/\/([^\s\]]+)\s+([^\]]+)\]/g, '[$3](http$1://$2)')
      
      // Wiki links with special handling for certain cases
      .replace(/\[\[([^\]|]+)\]\]/g, (match, pageName) => {
        // Create a standardized slug
        const slug = pageName
          .toLowerCase()
          .replace(/_/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        return `[${pageName}](/wiki/${slug})`;
      })
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (match, pageName, displayText) => {
        // Create a standardized slug
        const slug = pageName
          .toLowerCase()
          .replace(/_/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        return `[${displayText}](/wiki/${slug})`;
      })
      
      // Lists
      .replace(/^\*\*\*\s/gm, '    - ')
      .replace(/^\*\*\s/gm, '  - ')
      .replace(/^\*\s/gm, '- ')
      .replace(/^###\s/gm, '    1. ')
      .replace(/^##\s/gm, '  1. ')
      .replace(/^#\s/gm, '1. ')
      
      // Tables
      .replace(/{\|(.+?)^\|}/gms, (match) => {
        // Convert the wiki table to markdown table
        // This is a simplified conversion, complex tables may need manual review
        const lines = match.split('\n').filter(line => line.trim() !== '');
        let mdTable = '';
        
        // Skip the first line (table start)
        for (let i = 1; i < lines.length - 1; i++) {
          const line = lines[i];
          if (line.startsWith('!')) {
            // Header row
            mdTable += '| ' + line.substring(1).replace(/!!/g, ' | ') + ' |\n';
            mdTable += '| --- '.repeat(line.split('!!').length) + '|\n';
          } else if (line.startsWith('|')) {
            // Data row
            mdTable += line.replace(/\|\|/g, ' | ') + '\n';
          }
        }
        return mdTable;
      })
      
      // Bold and Italic
      .replace(/'''([^']+)'''/g, '**$1**')
      .replace(/''([^']+)''/g, '*$1*')
      
      // Code blocks
      .replace(/<code>(.*?)<\/code>/gs, '`$1`')
      .replace(/<pre>(.*?)<\/pre>/gs, '```\n$1\n```');
    
    // Create a slug from the page name
    const slug = pageName
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    // Add frontmatter with appropriate title
    const title = pageName.replace(/_/g, ' ');
    const frontmatter = `---
id: ${slug}
title: ${title}
---

`;
    
    markdown = frontmatter + markdown;
    
    // Write to file
    fs.writeFileSync(path.join(wikiDir, `${slug}.md`), markdown);
    console.log(`✅ Converted ${pageName} to ${slug}.md`);
  } catch (error) {
    console.error(`❌ Error converting ${pageName}:`, error.message);
  }
}

// Add a page check function to avoid 404 errors
async function checkPageExists(pageName) {
  try {
    await axios.get(`${WIKI_BASE_URL}${pageName}${RAW_SUFFIX}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ Page ${pageName} does not exist or cannot be accessed.`);
    return false;
  }
}

// Convert each page
async function convertAllPages() {
  console.log('🔄 Starting NCOR Wiki conversion...');
  
  for (const page of pages) {
    const exists = await checkPageExists(page);
    if (exists) {
      await convertPage(page);
    }
  }
  
  // Generate sidebar at the end
  generateSidebar();
  
  console.log('✨ NCOR Wiki conversion complete! Check the wiki/ directory for the converted files.');
}

// Create wikiSidebars.js with the files that were actually created
function generateSidebar() {
  const files = fs.readdirSync(wikiDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
  
  console.log('Generated files:', files);
  
  // Create a simple sidebar with all files
  const sidebar = `
/**
 * Sidebar configuration for the NCOR Wiki
 */
const wikiSidebars = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'NCOR Wiki Home',
    },
    {
      type: 'category',
      label: 'Wiki Content',
      items: ${JSON.stringify(files.filter(f => f !== 'index'))},
    },
  ],
};

module.exports = wikiSidebars;
`;

  fs.writeFileSync(path.join(__dirname, '..', 'wikiSidebars.js'), sidebar);
  console.log('✅ Generated wikiSidebars.js with available files');
}

convertAllPages();