# Netflix Clone — React JS

A feature-rich Netflix clone built with **React JS** and **Firebase**, replicating the look, feel, and core functionality of the Netflix streaming platform.

---

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

This project is a front-end Netflix clone that demonstrates how to build a modern, responsive streaming-service UI using React JS. It integrates Firebase for user authentication so visitors can sign up, log in, and be redirected automatically based on their authentication state. Browseable movie rows are rendered through a reusable `TitleCard` component, and clicking a title navigates the user to a dedicated video-player page.

---

## Features

- 🔐 **Firebase Authentication** — Sign up and log in with email & password; automatic redirect based on auth state
- 🏠 **Home Page** — Hero banner with featured content and categorised movie rows
- 🎬 **Video Player** — Dedicated player page for each title (route: `/player/:id`)
- 🔔 **Toast Notifications** — Dark-themed alerts for login errors and success messages via React Toastify
- 📱 **Responsive Design** — Layout adapts to desktop, tablet, and mobile viewports
- 🧭 **Client-side Routing** — Smooth navigation between pages with React Router DOM v6
- ♻️ **Reusable Components** — Modular `NavBar`, `Footer`, and `TitleCard` components

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React JS 18** | UI component library |
| **JavaScript (ES2022+)** | Primary programming language |
| **Vite** | Development server & bundler |
| **Firebase 10** | Authentication & backend services |
| **React Router DOM v6** | Client-side routing |
| **React Toastify** | In-app notifications |
| **ESLint** | Code linting |

---

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- A [Firebase](https://firebase.google.com/) project with **Email/Password** authentication enabled

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mahima-Sanketh-Git/Netflix-Clone-React-JS.git
   cd Netflix-Clone-React-JS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com), enable the *Email/Password* sign-in method, and copy your web app's config values into `src/firebase.js`:

   ```js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**

   ```bash
   npm run build
   ```

   The optimised output will be in the `dist/` folder.

6. **Preview the production build**

   ```bash
   npm run preview
   ```

---

## Usage Guide

| Action | How to do it |
|---|---|
| **Sign Up** | Navigate to `/login` and fill in the registration form |
| **Log In** | Enter your email & password on the `/login` page |
| **Browse content** | After logging in you are redirected to `/` (Home) where movie rows are displayed |
| **Watch a title** | Click on any title card to open the player at `/player/:id` |
| **Log Out** | Use the account menu in the navigation bar |

---

## Project Structure

```
Netflix-Clone-React-JS/
├── public/                  # Static assets served as-is
├── src/
│   ├── assets/              # Images, icons, and other media
│   ├── components/
│   │   ├── Footer/          # Site footer component
│   │   ├── NavBar/          # Top navigation bar component
│   │   └── TitleCard/       # Reusable movie/show card component
│   ├── pages/
│   │   ├── Home/            # Home page (browse view)
│   │   ├── Login/           # Login & sign-up page
│   │   └── Player/          # Video player page
│   ├── App.jsx              # Root component with routing & auth observer
│   ├── firebase.js          # Firebase initialisation & exports
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── .eslintrc.cjs            # ESLint configuration
├── .gitignore
├── index.html               # HTML entry point
├── package.json
├── package-lock.json
└── vite.config.js           # Vite configuration
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** this repository by clicking the "Fork" button at the top right of the page.

2. **Clone** your fork locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/Netflix-Clone-React-JS.git
   cd Netflix-Clone-React-JS
   ```

3. **Create a new branch** for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**, then lint and verify them:

   ```bash
   npm run lint
   npm run build
   ```

5. **Commit** your changes with a descriptive message:

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push** your branch to GitHub:

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** against the `main` branch of the original repository. Describe what you changed and why.

Please ensure your code follows the existing ESLint rules and that the project builds without errors before submitting.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

> **Disclaimer:** This project is for educational purposes only. Netflix and all related trademarks, content, and intellectual property belong to Netflix, Inc.
