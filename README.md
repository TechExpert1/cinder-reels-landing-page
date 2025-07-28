# Cinder Reels Landing Page

A modern, responsive landing page for Cinder Reels built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all device sizes
- **Video Player**: Custom video player with play/pause controls, seek bar, and fullscreen functionality
- **Interactive Components**: FAQ accordion, feature showcase, and email signup form
- **Modern UI**: Clean design with custom styling using Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Fast Development**: Powered by Vite for lightning-fast hot reload

## 📁 Project Structure

```
cinder-reels-landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LaunchSection.tsx
│   │   ├── Video.tsx
│   │   ├── Features.tsx
│   │   └── FAQ.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

Make sure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/minahilali117/cinder-reels-lamding-page.git
   cd cinder-reels-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📦 Dependencies

### Main Dependencies
- **React** (^18.3.1) - UI library for building user interfaces
- **React DOM** (^18.3.1) - React rendering for web browsers
- **TypeScript** (^5.6.2) - Type-safe JavaScript

### Development Dependencies
- **Vite** (^6.0.1) - Fast build tool and development server
- **Tailwind CSS** (^3.4.14) - Utility-first CSS framework
- **PostCSS** (^8.4.49) - CSS processor
- **Autoprefixer** (^10.4.20) - CSS vendor prefixing
- **@vitejs/plugin-react** (^4.3.4) - React plugin for Vite
- **ESLint** (^9.13.0) - JavaScript/TypeScript linting
- **@typescript-eslint/eslint-plugin** (^8.11.0) - TypeScript ESLint rules
- **@typescript-eslint/parser** (^8.11.0) - TypeScript parser for ESLint

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom configurations:
- **Font**: Montserrat (loaded via Google Fonts)
- **Custom Colors**: Brand-specific color palette
- **Responsive Design**: Mobile-first breakpoints
- **Custom Components**: Styled video controls and interactive elements

## 🧩 Components

### Header
- Navigation with share button
- Responsive design with hover effects

### Hero
- Main landing section with logo and title
- Timer badge with countdown functionality
- Fully responsive layout

### Video
- Custom video player with HTML5 video API
- Play/pause controls with auto-hide functionality
- Mobile seek bar with progress tracking
- Fullscreen support

### LaunchSection
- Email signup form
- Launch messaging and call-to-action

### Features
- Feature grid showcasing app benefits
- Image-based feature cards

### FAQ
- Accordion-style frequently asked questions
- Multiple FAQs can be open simultaneously
- Smooth animations and transitions

## 🔧 Configuration Files

- **vite.config.ts**: Vite configuration with React plugin
- **tailwind.config.js**: Tailwind CSS configuration with custom fonts
- **tsconfig.json**: TypeScript configuration for the app
- **tsconfig.node.json**: TypeScript configuration for Node.js tools

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: Default (up to 768px)
- Desktop: md: (768px and up)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

Developed by the Cinder Reels team.

---

© 2025 Cinder Reels. All rights reserved.
