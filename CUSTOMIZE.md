# Professional Portfolio - Customization Guide

## 🎨 Personalization Checklist

Run through this checklist to make the site your own:

### 1. **Hugo Configuration** (`hugo.yaml`)
```yaml
baseURL: "https://MahiDama.github.io/"
params:
  author: "Your Full Name"
  github: "github.com/YOUR_USERNAME"
  linkedin: "linkedin.com/in/YOUR_LINKEDIN_PROFILE"
  twitter: "@YOUR_TWITTER"  # Optional

  # Update the color scheme if desired:
  primaryColor: "#00ff88"      # Neon green
  accentColor: "#ff006b"       # Neon pink  
  backgroundColor: "#0a0e27"   # Dark navy
```

### 2. **Home Page Content** (`content/_index.md`)
- Update the hero title and subtitle
- Modify the tagline about yourself
- Keep or edit the code block visual

### 3. **Add Your Projects**

Create new project files in `content/projects/`:

**Example: `content/projects/my-new-project.md`**
```markdown
---
title: "Project Name"
type: "projects"
status: "Beta | Open Source"
problem: "What problem does this solve?"
build: "How you solved it"
github_link: "https://github.com/username/project"
demo_link: "https://project-demo.com"
technologies:
  - "Tech Stack 1"
  - "Tech Stack 2"
  - "Tech Stack 3"
highlights:
  - title: "Backend"
    description: "Technical details about backend"
  - title: "UX"
    description: "User experience highlights"
---

## Deep Technical Overview

### Architecture
Your detailed architecture explanation...

### How It Works
Step-by-step explanation...

### Tech Stack
Full tech stack details...
```

### 4. **Update About Section**
Edit the about section in `themes/modern-minimal/layouts/index.html`:
- Update your background
- Modify the bullet points about your expertise
- Adjust the stats cards if needed

### 5. **Mentorship Configuration**

**A. Update form text** (`content/mentorship/_index.md`)
- Customize the introduction
- Update any availability info

**B. Add Calendly integration:**
1. Create a free [Calendly](https://calendly.com) account
2. Set up a 15-minute event type
3. Get your embed URL (looks like `https://calendly.com/username/meeting`)
4. In `themes/modern-minimal/layouts/mentorship/single.html`, uncomment and update:

```html
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_URL"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
```

**C. Form submission handling:**
The form currently redirects to Calendly. To also save responses, choose one:

- **Formspree (Free)**: Update the form in `mentorship/single.html`:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```

- **Google Forms**: Generate a GET URL and use it as form action

- **Backend API**: Modify `themes/modern-minimal/static/js/main.js`

### 6. **Colors & Branding**

Edit `themes/modern-minimal/static/css/style.css`:

```css
:root {
    --bg-primary: "#0a0e27";      /* Main background */
    --bg-secondary: "#1a1f3a";    /* Card backgrounds */
    --text-primary: "#e0e0e0";    /* Main text */
    --text-secondary: "#9ca3af";  /* Secondary text */
    --accent-primary: "#00ff88";  /* Primary highlight */
    --accent-secondary: "#ff006b"; /* Secondary highlight */
    --accent-tertiary: "#00d4ff"; /* Tertiary highlight */
}
```

### 7. **Add Media**

**Demo Videos:**
```
/static/videos/  ← Store your videos here
```

Link in project markdown:
```html
<video width="100%" autoplay muted loop>
  <source src="/videos/demo.mp4" type="video/mp4">
</video>
```

**Project Screenshots:**
```
/static/images/  ← Store images here
```

Link in markdown:
```markdown
![Project Screenshot](/images/project-screenshot.png)
```

### 8. **Custom Domain (Optional)**

1. Buy a domain (Namecheap, GoDaddy, Google Domains, etc.)
2. Add `CNAME` file to root with your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS settings with your registrar
4. Update `baseURL` in `hugo.yaml`

### 9. **Social Links**

Update footer social links by editing `hugo.yaml`:
```yaml
params:
  github: "github.com/yourprofile"
  linkedin: "linkedin.com/in/yourprofile"
  twitter: "@yourhandle"
```

These automatically populate in the footer.

### 10. **Favicon**

Replace `/static/favicon.svg` with your own logo/icon.

---

## 🚀 Deployment Steps

### GitHub Pages Setup

1. **Create repository**
   ```bash
   # Create repo named: YOUR_USERNAME.github.io
   ```

2. **Deploy locally first**
   ```bash
   ./setup.sh      # Or: hugo server -D
   ```

3. **Build for production**
   ```bash
   hugo --minify   # Creates /public folder
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git push -u origin main
   ```

5. **GitHub Actions will auto-deploy**
   - Check `.github/workflows/deploy.yml` for the workflow
   - Site will be live at `https://YOUR_USERNAME.github.io`

---

## 💡 Pro Tips

### Content Organization
- Keep project descriptions concise (1-2 paragraphs max)
- Use Markdown formatting for better readability
- Add code blocks with syntax highlighting for technical details

### Performance
The site is optimized for speed:
- No external JavaScript frameworks
- Minimal CSS (~20KB)
- Static HTML (no server needed)
- Lighthouse scores typically 95+

### SEO
- Update `hugo.yaml` with proper descriptions
- Each project gets its own searchable page
- Add Open Graph meta tags if needed (in `baseof.html`)

### Analytics (Optional)
Add Google Analytics in `baseof.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 📝 File Reference

| File | Purpose |
|------|---------|
| `hugo.yaml` | Site configuration |
| `content/_index.md` | Home page |
| `content/projects/*.md` | Project pages |
| `content/mentorship/_index.md` | Mentorship page |
| `themes/modern-minimal/layouts/` | HTML templates |
| `themes/modern-minimal/static/css/style.css` | Styling |
| `themes/modern-minimal/static/js/main.js` | JavaScript |
| `.github/workflows/deploy.yml` | Auto-deployment config |

---

## ❓ Common Questions

**Q: How do I add a new section/page?**
A: Create a new markdown file in `content/` with appropriate frontmatter (title, type, layout, etc.)

**Q: How do I change the color scheme?**
A: Edit CSS variables in `themes/modern-minimal/static/css/style.css`

**Q: Can I add more projects?**
A: Yes! Create new files in `content/projects/` following the same format

**Q: How do I add a blog?**
A: Create `content/blog/` directory and add markdown files with date frontmatter

**Q: Where do I host it?**
A: Recommended: GitHub Pages (free, built-in deployment). Also works with Netlify, Vercel, Cloudflare Pages

---

## 🆘 Troubleshooting

**Site not building?**
- Ensure Hugo version is 0.87.0+
- Check for typos in frontmatter (YAML)
- Verify file paths are correct

**Changes not showing?**
- Restart development server (`Ctrl+C`, then run again)
- Clear browser cache
- Check console for errors (`F12` → Console tab)

**Deployment issues?**
- Verify GitHub Actions workflow is correct
- Check GitHub Pages settings in repo
- Ensure `baseURL` matches your domain

---

Built with Hugo • Deployed on GitHub Pages • Made for Builders
