# Next.js Portfolio Project

This document provides an overview of the file and folder structure for the Next.js portfolio project. 
The project is structured to separate concerns and make it easy to maintain and scale.

## Project Structure

src/
├── components/    # Reusable UI components
├── layout/        # Layout components for page structure
├── pages/         # Next.js pages and/or APIs
├── styles/        # Global styles and styled-components
├── themes/        # Theme configuration files
└── constants/     # Constants used across the project

public/
├── images/        # Image assets used in the project
└── resume.pdf     # Resume file accessible publicly

### `src` Directory

- `components/`: Contains UI components used across the application. Each component has its own directory with JS and optional style files.
  - `Footer/`, `Header/`, `Hero/`, etc.: Specific components for different parts of the application.
- `layout/`: Includes layout components like `Layout.js` and its styles, managing the overall layout of the application.
- `pages/`: Next.js pages like `_app.js`, `index.js`, and `_document.js` that define the entry points and document structure.
- `styles/`: Houses global styles, themes, and styled-components. The `global.scss` and `theme.js` are key for setting global CSS and theming.
- `constants/`: Stores constant values like configuration settings, reusable static data, etc.

### `public` Directory

- `images/`: Contains image files used throughout the application, organized by usage and optimized for web.
- `resume.pdf`: A publicly accessible PDF file
