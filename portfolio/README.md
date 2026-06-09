# Sadhana M — Portfolio

Premium dark-theme portfolio built with **React + Vite + Framer Motion**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.
If port `5173` is already in use, Vite will automatically use the next available port.

## 📦 Build for Production

```bash
npm run build
```

## ✉️ Send Email from Contact Form

This portfolio uses EmailJS to send contact form messages directly from the browser.

1. Create a free account at https://www.emailjs.com
2. Add an email service, then create a template.
3. Copy your Service ID, Template ID, and Public Key.
4. Create a `.env` file in the `portfolio/` folder with these values:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

5. Restart the dev server.

> If the email setup is missing, the form will show an error message instead of failing silently.

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Icons.jsx
├── data/
│   └── portfolioData.js   ← Edit your info here
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Customization

All content lives in `src/data/portfolioData.js` — update your name, links, projects, etc. there.

## 🛠 Tech Stack

- React 18 + Vite
- Framer Motion (animations)
- Lucide React (icons)
- CSS Variables (theming)
- Google Fonts: Syne + DM Sans

## 📋 Sections

1. Hero — Introduction + CTAs
2. About Me — Profile + Career Objective
3. Skills — Animated skill bars
4. Projects — FitFusion, Smart Learning Portal, Choco Bliss
5. Experience — Internship timeline
6. Education — Academic cards
7. Achievements & Workshops
8. Contact — Form + links

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Connect repo at vercel.com
3. Done — auto-deploys on push

## 📍 Deploy to Netlify

1. Push your project to GitHub.
2. Create a new site on netlify.com and choose "GitHub".
3. Pick your portfolio repo.
4. Set the build command to `npm run build`.
5. Set the publish directory to `dist`.
6. Deploy — Netlify will give you a live URL.

> The included `netlify.toml` file makes Netlify use the correct build folder.
