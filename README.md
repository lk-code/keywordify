# keywordify

This is a simple Node.js plugin that generates all possible combinations of keywords from multiple arrays.

## Installation

To install the plugin, run the following command:

```
npm install keywordify
```

## Usage

```javascript
const { generateKeywords } = require('my-keyword-generator');

const keywords = generateKeywords(
  ["Shop", "Website", "App"],
  ["Programmer", "Development"],
  ["City ABC", "City DEF"],
  ["My Website Name"]
);

/**
 * keywords contains
 * 
 * "Shop Programmer City ABC My Website Name"
 * ... 
 * "App Development City DEF My Website Name"
 * ...
 */
```