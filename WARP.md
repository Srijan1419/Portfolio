# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- **Start development server**: `npm run dev` - Launches Vite dev server with hot reload
- **Build for production**: `npm run build` - Creates optimized production build
- **Preview production build**: `npm run preview` - Preview the production build locally
- **Lint code**: `npm run lint` - Run ESLint on the codebase

### Package Management
- **Install dependencies**: `npm install`
- **Clean install**: `rm -rf node_modules package-lock.json && npm install`

## Architecture Overview

### Tech Stack
- **Framework**: React 18.3.1 with JSX
- **Build Tool**: Vite 6.0.5 (fast development and optimized builds)
- **Styling**: Tailwind CSS 3.4.17 with custom animations and gradients
- **Email Service**: EmailJS for contact form functionality
- **Icons**: React Icons (Feather Icons, Font Awesome)
- **Animations**: Custom CSS animations with react-parallax-tilt and react-typing-effect
- **Notifications**: React Toastify for user feedback
- **Routing**: React Router DOM 7.1.3

### Project Structure
```
src/
├── components/          # React components organized by feature
│   ├── About/          # About section component
│   ├── Contact/        # Contact form with EmailJS integration
│   ├── Education/      # Education timeline component
│   ├── Experience/     # Work experience component
│   ├── Footer/         # Site footer
│   ├── Navbar/         # Navigation with smooth scroll
│   ├── Skills/         # Skills showcase with tech logos
│   ├── Work/           # Projects portfolio
│   └── BlurBlob.jsx    # Animated background blob component
├── assets/             # Static assets organized by category
│   ├── tech_logo/      # Technology stack logos
│   ├── company_logo/   # Company/organization logos
│   ├── education_logo/ # Educational institution logos
│   └── work_logo/      # Project thumbnails
├── constants.js        # Central data store for all content
├── App.jsx            # Main app component with section layout
├── main.jsx           # React app entry point
└── index.css          # Global styles and Tailwind imports
```

### Key Architectural Patterns

#### Component Organization
- **Feature-based folders**: Each major section (About, Skills, etc.) has its own component directory
- **Single responsibility**: Components are focused on specific portfolio sections
- **Reusable components**: BlurBlob for background effects, shared navigation logic

#### Data Management
- **Constants file**: All portfolio data (skills, projects, experience, education) centralized in `src/constants.js`
- **No external state management**: Uses React's built-in useState for component-level state
- **Static data structure**: Portfolio content stored as exported arrays and objects

#### Styling Architecture
- **Tailwind-first**: Utility classes for all styling
- **Custom theme extensions**: Added animations (`blob`, keyframes) and gradients in `tailwind.config.js`
- **Color scheme**: Consistent dark theme with purple accents (`#8245ec`, `#050414`)
- **Responsive design**: Mobile-first approach with responsive breakpoints

#### Email Integration
- **EmailJS service**: Contact form sends emails without backend server
- **Form validation**: Built-in HTML5 validation with custom styling
- **User feedback**: Toast notifications for success/error states
- **Configuration**: Service IDs and templates stored in component (should be moved to environment variables)

### Development Guidelines

#### Component Development
- Follow React functional component pattern with hooks
- Use consistent prop destructuring and default values
- Implement smooth scroll behavior for navigation
- Maintain consistent spacing using Tailwind classes (`px-[7vw] md:px-[7vw] lg:px-[20vw]`)

#### Asset Management
- Place logos and images in organized subdirectories under `src/assets/`
- Import assets in `constants.js` for centralized management
- Use consistent naming conventions for asset files

#### Styling Standards
- Use Tailwind utility classes instead of custom CSS where possible
- Follow the established color palette (purple gradients, dark backgrounds)
- Implement responsive design with mobile-first approach
- Use consistent hover effects and transitions

#### Data Updates
- Update portfolio content by modifying arrays in `src/constants.js`
- Maintain consistent data structure for skills, experience, education, and projects
- Include all required fields for each data type (id, title, description, etc.)

### Configuration Notes

#### EmailJS Setup
The contact form requires EmailJS configuration:
- Service ID: Replace `"service_axbtt7a"` in Contact component
- Template ID: Replace `"template_1ziboq3"` in Contact component  
- Public Key: Replace `"Rz7W9pVF0HdDryNNL"` in Contact component

#### Build Configuration
- **Vite config**: Standard React plugin setup
- **ESLint**: Configured for React 18.3 with hooks and refresh plugins
- **Tailwind**: Configured for all JS/JSX files with custom theme extensions

This is a single-page application (SPA) portfolio showcasing personal/professional information with smooth scrolling navigation and interactive contact functionality.
