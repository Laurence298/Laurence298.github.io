# Project Structure

This React project follows standard React best practices for organization and maintainability.

## Directory Structure

```
src/
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # Reusable UI components
│   ├── Card.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   ├── QuickLinkCard.jsx
│   └── index.js        # Barrel exports for components
├── contexts/            # React Context providers and hooks
│   ├── NavbarContext.jsx
│   └── index.js        # Barrel exports for contexts
├── pages/               # Page-level components
│   ├── AboutMe.jsx
│   ├── Contact.jsx
│   ├── ListView.jsx
│   └── index.js        # Barrel exports for pages
├── constants/           # Constants and static data
│   └── aboutMe.json
├── hooks/               # Custom React hooks (currently empty)
├── utils/               # Utility functions (currently empty)
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles

public/
├── resume.html         # Static HTML files
└── ...                 # Other public assets
```

## Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.jsx`, `QuickLinkCard.jsx`)
- **Pages**: PascalCase (e.g., `AboutMe.jsx`, `ListView.jsx`)
- **Contexts**: PascalCase with "Context" suffix (e.g., `NavbarContext.jsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useNavbarContext`)
- **Constants/Data**: camelCase (e.g., `aboutMe.json`)
- **Utilities**: camelCase (e.g., `formatDate.js`)

## Import Guidelines

Thanks to barrel exports (index.js files), you can use cleaner imports:

```javascript
// ✅ Good - using barrel exports
import { Navbar, Card, Modal } from './components';
import { NavbarContextProvider } from './contexts';
import { AboutMe, ListView } from './pages';

// ❌ Avoid - direct file imports (unless necessary)
import Navbar from './components/Navbar';
import Card from './components/Card';
```

## Folder Purposes

- **components/**: Reusable UI components that can be used across multiple pages
- **pages/**: Top-level page components that represent different routes/views
- **contexts/**: React Context API providers and their associated hooks
- **hooks/**: Custom React hooks for shared logic
- **utils/**: Pure utility functions and helpers
- **constants/**: Static data, configuration, and constants
- **assets/**: Images, fonts, and other static files imported in JS

## Best Practices

1. Keep components small and focused on a single responsibility
2. Use barrel exports (index.js) for cleaner imports
3. Place reusable logic in custom hooks
4. Store static data in the constants folder
5. Use PascalCase for component files
6. One component per file
7. Co-locate related files when appropriate
