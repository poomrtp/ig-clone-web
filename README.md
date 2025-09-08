# IG Clone Web

A React project that mimics Instagram UI and features for assignment test purposes.

## Key feature

- Responsive design
- Infinite scroll
- Interaction with post image and like button
- Integrate with REST API

## Requirements

- Node.js 22.x and npm (recommend using nvm to manage versions)

## Install

```bash
npm install
```

## Environment setup

Create a `.env` file in the project root with the following variables:

```bash
# this env is for test actually should not write in file

# Mock API (json-server) base URL
REACT_APP_JSON_SERVER_API=http://localhost:3001

# Pixabay API
REACT_APP_PIXABAY_API=https://pixabay.com/api
REACT_APP_PIXABAY_API_KEY=52152161-df712e8cfa2c7d5ff8239fce2
```

## JSON Server setup (mock backend)

- JSON Server repo and how to setup: `https://github.com/poomrtp/ig-clone-json-server`

## Start and test

```bash
# Start the web app (http://localhost:3000)
npm start

# Run tests in watch mode
npm test

# Build production assets
npm run build
```

## Third-party APIs/services used

- Pixabay REST API — images data source (`https://pixabay.com/api/docs/`).
- JSON Server — mock REST backend for local development (`https://github.com/typicode/json-server`).
