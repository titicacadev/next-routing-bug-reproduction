# Next.js Push Bug Reproduction

This repository reproduces `Router.push` (and `Router.replace` too) bug with basePath configuration.

## How to Reproduce Bug

1. `next run dev`
2. Go to `http://localhost:3000/foo`
3. Click buttons.

## Expected Result

URL is changed to `http://localhost:3000?foo=bar`
