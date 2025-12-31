# Free Mans Journey (Frontend)

A frontend-only React blog application with a clean, modern light theme.

## Features

- Homepage with header/navigation and a responsive grid of blog post cards
- Post detail reader page with typography styling and back navigation
- Client-side routing (React Router)
- Mock/static posts (no backend, no database)
- Search/filter by title or tag
- Minimal footer
- Responsive, accessible UI
- Local placeholder images served from `public/assets/...`

## Running locally (preview on port 3000)

From this folder:

```bash
npm install
npm start
```

Then open: http://localhost:3000

## Content

Mock posts live in:

- `src/data/posts.js`

You can edit or add new posts there. Each post uses a `slug` which becomes the URL:

- `/post/:slug`

## Notes

- No external services are required (no API calls).
- This app is compatible with Create React App and should run without additional configuration.
