#!/usr/bin/env node

// CLI entry point for @converso-empire/conso
// This file loads the bundled CLI from packages/cli/bin

const path = require('path');
const fs = require('fs');

// Try to load from the built CLI
const cliPath = path.join(__dirname, '..', 'packages', 'cli', 'bin', 'index.js');

if (fs.existsSync(cliPath)) {
  require(cliPath);
} else {
  console.error('Error: CLI not built. Please run "npm run build" first.');
  process.exit(1);
}
