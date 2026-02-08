# Tamar Software - Next.js Website

This is a modern, responsive website for Tamar Software built with **Next.js 14+** (App Router) and styled with **Tailwind CSS**. It serves as a comprehensive corporate portal showcasing capabilities, case studies, industries served, and company information.

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18.17.0 or later recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### 📥 Installation 

1. **Navigate to the project directory:**
   Open your terminal and make sure you are in the `tamar-next` folder.
   ```bash
   cd tamar-next
   ```

2. **Install dependencies:**
   Run the following command to install all necessary packages listed in `package.json`.
   ```bash
   npm install
   ```

### 🏃 Running the Development Server

To start the project locally in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page hot-reloads as you edit files.

### 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```
This generates a `.next` folder with the production build.

To start the production server after building:

```bash
npm run start
```

### 📤 Static Export (Optional)

If `output: 'export'` is enabled in `next.config.ts`, `npm run build` will generate a static `out` folder that can be deployed to static hosting services (like GitHub Pages, Netlify, or AWS S3).

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React Framework)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) & Custom CSS Keyframes
- **Carousels**: [React Slick](https://react-slick.neostack.com/)
- **Icons**: SVG Icons & Font Awesome (if applicable)

## 📂 Project Structure

- **`src/app`**: Contains the App Router pages (`page.tsx`) and layout.
- **`src/components`**: Reusable UI components like Header, Footer, etc.
- **`public`**: Static assets like images, fonts, and icons.
- **`src/app/globals.css`**: Global styles and Tailwind imports.

## ✨ Key Features

- **Responsive Design**: Fully responsive layout for Mobile, Tablet, and Desktop.
- **Dynamic Animations**: Custom entrance and background animations.
- **Modular Components**: Reusable React components for easier maintenance.
- **Fast Performance**: Optimized with Next.js static generation features.

---
© 2024 Tamar Software. All rights reserved.
