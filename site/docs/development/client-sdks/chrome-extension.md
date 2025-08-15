---
sidebar_position: 2
---

# Chrome Extension

Bring AI assistance to any website with the Naas Chrome Extension.

## Installation

1. **Install from Chrome Web Store**: [Naas Extension](https://chrome.google.com/webstore)
2. **Login** with your Naas account
3. **Start using** - highlight text anywhere and ask questions

## Features

### Text Analysis
- **Highlight any text** on a webpage
- **Right-click** → "Analyze with Naas"
- Get instant AI insights, summaries, or explanations

### Page Summarization
- **Click extension icon** while on any article or page
- **Select "Summarize Page"**
- Get key points and main ideas extracted

### Quick Actions
```
• Summarize this article
• Explain this code
• Translate this text
• Find key insights
• Generate questions about this content
```

## Development

### Local Development Setup

```bash
git clone https://github.com/jupyter-naas/chrome-extension.git
cd chrome-extension

# Install dependencies
npm install

# Build extension
npm run build

# Load in Chrome
# 1. Go to chrome://extensions/
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select the 'dist' folder
```

### Extension Architecture

```
src/
├── background/     # Service worker
├── content/        # Content scripts
├── popup/          # Extension popup UI
└── options/        # Settings page
```

### API Integration

```javascript
// Content script example
const analyzeText = async (text) => {
  const response = await fetch('https://api.naas.ai/v1/completion', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: `Analyze this text: ${text}`,
      agent: 'universal'
    })
  });
  
  return response.json();
};
```

### Custom Actions

```javascript
// Add custom right-click menu items
chrome.contextMenus.create({
  id: "custom-analysis",
  title: "Custom Analysis",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId === "custom-analysis") {
    const result = await analyzeText(info.selectionText);
    // Display result
  }
});
```

## Configuration

### API Settings
Access via extension popup → Settings:
- **API Key**: Your Naas platform token
- **Default Agent**: Choose your preferred AI agent
- **Auto-summarize**: Enable automatic page summarization

### Privacy
- **Local processing**: Text analysis happens via secure API calls
- **No data storage**: Extension doesn't store your browsed content
- **Secure transmission**: All data encrypted in transit

## Use Cases

### Research & Learning
- **Academic papers**: Get summaries and key findings
- **News articles**: Extract main points quickly
- **Technical docs**: Explain complex concepts

### Content Creation
- **Blog posts**: Generate ideas and outlines
- **Social media**: Create engaging captions
- **Emails**: Improve tone and clarity

### Professional Work
- **Code review**: Explain code snippets
- **Documentation**: Simplify complex instructions
- **Competitor analysis**: Analyze competitor websites

## Repository

**Development**: [chrome-extension](https://github.com/jupyter-naas/chrome-extension)

The extension is open source - contribute features or report issues on GitHub.
