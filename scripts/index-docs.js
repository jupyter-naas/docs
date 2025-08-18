const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Algolia configuration
const client = algoliasearch('NGBDVK8FYQ', 'YOUR_ADMIN_API_KEY'); // You'll need to replace with your Admin API Key
const index = client.initIndex('docs.naas.ai');

// Function to extract text content from markdown
function extractContent(markdown) {
  // Remove frontmatter, code blocks, and markdown syntax
  return markdown
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Remove links, keep text
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
}

// Function to recursively read markdown files
function readMarkdownFiles(dir, baseUrl = '') {
  const records = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.')) {
      // Recursively read subdirectories
      const subRecords = readMarkdownFiles(filePath, `${baseUrl}/${file}`);
      records.push(...subRecords);
    } else if (file.endsWith('.md') && file !== 'README.md') {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { data: frontmatter, content: markdown } = matter(content);
        
        // Extract title from frontmatter or first heading
        const title = frontmatter.title || 
                     markdown.match(/^#\s+(.+)$/m)?.[1] || 
                     file.replace('.md', '');

        // Create URL path
        const urlPath = file === 'index.md' 
          ? baseUrl || '/'
          : `${baseUrl}/${file.replace('.md', '')}`;

        // Extract hierarchy from path
        const pathParts = baseUrl.split('/').filter(Boolean);
        const hierarchy = {
          lvl0: pathParts[0] || 'Documentation',
          lvl1: pathParts[1] || title,
          lvl2: pathParts[2] || null,
        };

        const record = {
          objectID: urlPath.replace(/^\//, '') || 'home',
          title,
          content: extractContent(markdown).substring(0, 8000), // Limit content length
          url: urlPath,
          hierarchy,
          type: 'content'
        };

        records.push(record);
        console.log(`Indexed: ${title} (${urlPath})`);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }

  return records;
}

// Main indexing function
async function indexDocumentation() {
  try {
    console.log('Starting documentation indexing...');
    
    // Read all markdown files from the docs directory
    const docsDir = path.join(__dirname, '../site/docs');
    const records = readMarkdownFiles(docsDir);

    console.log(`Found ${records.length} documents to index`);

    // Clear existing index
    await index.clearObjects();
    console.log('Cleared existing index');

    // Add records to Algolia
    const { objectIDs } = await index.saveObjects(records);
    console.log(`Successfully indexed ${objectIDs.length} documents`);

    console.log('Indexing completed successfully!');
  } catch (error) {
    console.error('Error during indexing:', error);
  }
}

// Run the indexing
indexDocumentation();
