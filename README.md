# Protoform

Studio website for student prototype projects. Built with **React 18**, **Vite** and **Tailwind CSS v4**.
Four pages (Home, Work, About, Contact) with hash routing, scroll animations and a responsive, dark-mode-aware layout.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

Requires Node.js 18 or newer.

## Structure

```
src/
  main.jsx            entry point
  App.jsx             page switcher + layout
  index.css           Tailwind import, color tokens, animations
  data.js             all text content (stats, projects, team, quotes)
  hooks/              useHashRoute, useInView
  components/         Navbar, Footer, Reveal, PhoneDemo, Stats, Steps, Marquee, CTA
  pages/              Home, Work, About, Contact
```

## Customize

- **Brand colors / fonts:** edit the CSS variables and `@theme` block in `src/index.css`.
- **Content:** edit `src/data.js` and the copy inside `src/pages/*`.
- **Contact form:** it only shows a confirmation. Send `form` to your backend or a service
  (Formspree, EmailJS, Resend) at the `TODO` in `src/pages/Contact.jsx`.
- **Real URLs instead of `#hash`:** install `react-router-dom` and replace `useHashRoute`.
