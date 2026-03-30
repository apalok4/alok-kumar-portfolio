# Alok Kumar — Portfolio Website

Personal portfolio site for **Alok Kumar**, Senior Cloud DevOps Engineer with 11+ years of experience across Azure, AWS, and GCP.

🔗 **Live Site:** `https://<your-github-username>.github.io/alok-kumar-portfolio`

---

## 📁 Project Structure

```
alok-kumar-portfolio/
├── index.html          # Main HTML (sections: hero, skills, experience, projects, certs, contact)
├── css/
│   └── style.css       # All styles — variables, layout, components, responsive
├── js/
│   └── main.js         # Scroll reveal, mobile nav, active nav highlighting
└── README.md
```

---

## 🚀 Deploy to GitHub Pages

1. **Create a new repo** on GitHub named `alok-kumar-portfolio`

2. **Push the files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/alok-kumar-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo **Settings → Pages**
   - Set Source to `Deploy from a branch`
   - Set Branch to `main`, folder to `/ (root)`
   - Click **Save**

4. Your site will be live at:
   ```
   https://<your-username>.github.io/alok-kumar-portfolio/
   ```

---

## ✏️ Customisation

| What to change | Where |
|---|---|
| Name, title, tagline | `index.html` → `.hero-content` |
| Stats (years, clouds, etc.) | `index.html` → `.hero-stats` |
| Skills | `index.html` → `#skills` section |
| Work history | `index.html` → `#experience` section |
| Projects | `index.html` → `#projects` section |
| Education / certs | `index.html` → `#certs` section |
| Contact links | `index.html` → `.contact-bar` |
| Colours | `css/style.css` → `:root` variables |
| Fonts | `index.html` → Google Fonts `<link>` + `css/style.css` `:root` |

### Colour Variables (css/style.css)
```css
:root {
  --teal:    #00d4b4;   /* primary accent */
  --amber:   #f5a623;   /* secondary accent (available) */
  --bg:      #0a0c0f;   /* page background */
  --surface: #111418;   /* card/section background */
  --text:    #e8eaf0;   /* body text */
  --muted:   #6b7280;   /* secondary text */
}
```

---

## 🛠 Tech Stack

- Pure **HTML5 / CSS3 / Vanilla JS** — zero dependencies, zero build tools
- **Google Fonts** — Syne (display) + DM Mono + DM Sans
- **CSS custom properties** for theming
- **IntersectionObserver** for scroll-triggered reveal animations
- Fully **responsive** (mobile-first breakpoints at 480px, 900px, 1024px)

---

## 📄 License

MIT — free to use and modify for personal portfolios.
