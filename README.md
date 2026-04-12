# Professional Portfolio & Innovation Lab

A modern, ultra-fast portfolio website built with Hugo for GitHub Pages. Features project showcases, mentorship booking, and a developer-focused aesthetic.

## Customization

### Site Configuration (`hugo.yaml`)
```yaml
baseURL: "https://mahidama.github.io/"
params:
  author: "Your Name"
  github: "github.com/mahidama"
  linkedin: "linkedin.com/in/mahidama"
```

### Add Projects
Create new files in `content/projects/`:
```markdown
---
title: "Project Name"
type: "projects"
status: "Beta | Open Source"
problem: "The problem you solved"
build_desc: "How you solved it"
github_link: "https://github.com/..."
technologies:
  - "Tech1"
  - "Tech2"
---

Your project details here...
```

### Update Mentorship Form
Edit `content/mentorship/_index.md` and configure:
- Form fields
- Calendly integration (replace the embed URL)
- Booking instructions

### Customize Colors
Edit `themes/modern-minimal/static/css/style.css`:
```css
:root {
    --accent-primary: #00ff88;    /* Neon green */
    --accent-secondary: #ff006b;  /* Neon pink */
    --bg-primary: #0a0e27;        /* Dark navy */
}
```

## Project Structure

```
.
├── content/
│   ├── _index.md              # Home page
│   ├── projects/              # Project showcase
│   └── mentorship/            # Mentorship page
├── themes/
│   └── modern-minimal/
│       ├── layouts/           # HTML templates
│       └── static/            # CSS, JS, assets
├── static/                    # Public assets
├── hugo.yaml                  # Site configuration
└── .github/workflows/
    └── deploy.yml             # Auto-deployment
```

## Features

### Performance
- ⚡ Static site generation (ultra-fast)
- 📱 Fully responsive design
- 🎨 Dark theme with neon accents
- ♿ Semantic HTML & accessibility

### Content
- 🎯 Hero section with CTA
- 📊 Project portfolio with filtering
- 👤 About/Builder identity section
- 🤝 Mentorship booking funnel

### Developer Experience
- 📝 Clean Markdown-based content
- 🔄 One-click GitHub deployment
- 📱 Mobile-first responsive design
- 🎭 CSS custom properties for easy theming

## Mentorship Integration

### Calendly Setup
1. Create a [Calendly](https://calendly.com) account
2. Customize your event type (15 minutes recommended)
3. Get your embed URL
4. Replace the placeholder in `content/mentorship/_index.md`:
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/your-profile"></div>
```

### Form Handling
The form currently logs to console. To persist submissions:
- **Formspree**: Add to form `action="https://formspree.io/f/XXXXXX"`
- **Netlify Forms**: No changes needed if hosting on Netlify
- **Backend API**: Modify `js/main.js` to POST to your endpoint

## Customization Tips

### Add Demo Videos
Place videos in `static/videos/` and link them in project posts:
```html
<video width="100%" autoplay muted loop>
  <source src="/videos/demo.mp4" type="video/mp4">
</video>
```

### GitHub Integration
To show latest commit date, add this to project frontmatter:
```yaml
repo: "github/mahidama/repo"
```

### Social Links
Update in `hugo.yaml`:
```yaml
params:
  twitter: "@yourhandle"
  linkedin: "linkedin.com/in/mahidama"
  github: "github.com/mahidama"
```

## Hosting

### GitHub Pages (Recommended - Free)
- Domain: `https://mahidama.github.io`
- Or use a custom domain (add `CNAME` file with domain)

### Alternative Hosts
- **Netlify**: Connect GitHub repo, auto-deploys on push
- **Vercel**: Similar to Netlify, also free
- **Cloudflare Pages**: Free with DDoS protection

## Performance Optimizations

The site is designed for maximum speed:
- **No external fonts**: Uses system fonts
- **No JavaScript frameworks**: Vanilla JS only
- **Minimal CSS**: ~20KB total CSS
- **Static HTML**: No server computation needed

Typical PageSpeed scores:
- 📈 Lighthouse: 95+ (desktop)
- 📱 Mobile: 90+ (mobile)
- 🌍 Core Web Vitals: All green

## License

Copyright (c) 2026 Mahotsavy Dama. All rights reserved.

This software and all associated files are the proprietary and confidential property of Mahotsavy Dama. Any unauthorized use, reproduction, or distribution is strictly prohibited. See the [LICENSE](LICENSE) file for full details.

## Support

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes Directory](https://themes.gohugo.io/)
- [GitHub Pages Help](https://docs.github.com/en/pages)

---

**Built with Hugo** • Deployed to **GitHub Pages** • Designed for **Builders**
