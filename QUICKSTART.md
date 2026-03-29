# Quick Start Guide - Professional Portfolio

## ⚡ Get Started in 3 Steps

### Step 1: Install Hugo (1 minute)

**macOS:**
```bash
brew install hugo
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install hugo
```

**Windows:**
Download from https://github.com/gohugoio/hugo/releases or use:
```bash
choco install hugo-extended
```

Verify installation:
```bash
hugo version
```

---

### Step 2: Start Development Server (1 minute)

```bash
cd /path/to/ProfessionalWebsite
hugo server -D
```

Open your browser to: **http://localhost:1313**

You should see:
- 🎨 Dark theme with neon accents
- 📊 Two sample projects (VerityStream, StoryWeave)
- 🤝 Mentorship booking form
- 👤 About section

---

### Step 3: Customize & Deploy (5 minutes)

**Edit key files:**

1. **`hugo.yaml`** - Update site config:
   ```yaml
   baseURL: "https://mahidama.github.io/"
   title: "Your Name - Builder"
   params:
     author: "Your Name"
     github: "github.com/mahidama"
     linkedin: "linkedin.com/in/mahidama"
   ```

2. **`content/_index.md`** - Home page content
3. **`content/projects/veritystream.md`** - Your first project
4. **`content/mentorship/_index.md`** - Mentorship offer
5. **`themes/modern-minimal/static/css/style.css`** - Colors & styling

For detailed customization, see **[CUSTOMIZE.md](CUSTOMIZE.md)**

---

## 🚀 Deploy to GitHub Pages

### Option A: GitHub CLI (Easiest)

```bash
# Create repo
gh repo create mahidama.github.io --public

# Deploy
git add .
git commit -m "Initial portfolio"
git branch -M main
git push -u origin main
```

Site goes live at: `https://mahidama.github.io`

### Option B: Manual GitHub Setup

1. Create GitHub repo: `mahidama.github.io`
2. Push code:
   ```bash
   git remote add origin https://github.com/mahidama/mahidama.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. GitHub Actions auto-deploys in ~1 minute

---

## 📂 Project Structure

```
ProfessionalWebsite/
├── content/
│   ├── _index.md                 ← Home page
│   ├── projects/
│   │   ├── veritystream.md       ← Edit this!
│   │   └── storyweave.md         ← Or delete & add your own
│   └── mentorship/
│       └── _index.md             ← Booking page
├── themes/
│   └── modern-minimal/           ← The theme (don't move)
├── static/                       ← Assets (images, videos, favicon)
├── hugo.yaml                     ← Site config (EDIT THIS!)
├── README.md                     ← Full documentation
├── CUSTOMIZE.md                  ← Detailed customization guide
└── .github/
    └── workflows/
        └── deploy.yml            ← Auto-deployment (leave as-is)
```

---

## 🎨 Customization Essentials

### Add Your Projects

Create a new file: `content/projects/my-project.md`

```markdown
---
title: "My Amazing Project"
type: "projects"
status: "Live"
problem: "What problem does it solve?"
build_desc: "Your solution"
github_link: "https://github.com/mahidama/repo"
technologies:
  - "React"
  - "Node.js"
  - "Python"
highlights:
  - title: "Key Feature"
    description: "What makes this special"
---

Detailed project description in Markdown...
```

### Change Colors

Edit `themes/modern-minimal/static/css/style.css`:

```css
:root {
    --accent-primary: "#00ff88";   /* Change me! */
    --accent-secondary: "#ff006b"; /* Or me! */
}
```

### Add Mentorship Calendar

1. Create [Calendly](https://calendly.com) account (free)
2. Create 15-min meeting
3. In `content/mentorship/_index.md`, add:
   ```html
   <!-- Below the form -->
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_URL"></div>
   <script src="https://assets.calendly.com/assets/external/widget.js"></script>
   ```

---

## 💡 Live Reload During Development

While running `hugo server`, your browser auto-refreshes when you:
- Edit content files
- Change CSS
- Modify layouts

Just save and watch the magic! ✨

---

## 🔍 What's Different About This Theme?

✅ **Built for builders:**
- No bloat, no external dependencies
- Dark theme optimized for developer aesthetic
- Neon accents (green + pink) for visual pop

✅ **GitHub Pages optimized:**
- Static HTML (instant load)
- Auto-deployment via GitHub Actions
- Works out-of-the-box

✅ **Project-focused:**
- Elegant project showcase
- Tech stack badges
- GitHub integration ready

✅ **Mentorship funnel:**
- Professional booking form
- Calendly integration
- Call-to-action buttons

---

## 📊 Next Steps

1. ✅ Run `hugo server -D` locally
2. ✅ Edit `hugo.yaml` with your info
3. ✅ Update/replace projects
4. ✅ Customize mentorship page
5. ✅ Change colors if desired
6. ✅ Deploy to GitHub Pages
7. ✅ Share your portfolio!

---

## 🆘 Stuck?

- **Hugo docs:** https://gohugo.io/documentation/
- **GitHub Pages help:** https://docs.github.com/en/pages
- **Full customization guide:** See [CUSTOMIZE.md](CUSTOMIZE.md)
- **Theme docs:** See [README.md](README.md)

---

## 🎯 Success Metrics

Your site should have:
- ⚡ <1s load time (Lighthouse 95+)
- 📱 Mobile responsive
- 🎨 Professional appearance
- 🔄 Easy to maintain & update
- 🚀 One-click deployments

---

**Happy building! 🚀**

Made with Hugo • Optimized for GitHub Pages • Designed by builders, for builders
