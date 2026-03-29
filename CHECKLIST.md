# 📋 Configuration Checklist

Use this checklist to customize your portfolio for deployment.

## ✅ Essential Changes (Required)

- [ ] **1. Update Site Config** (`hugo.yaml`)
  ```yaml
  baseURL: "https://MahiDama.github.io/"
  title: "Mahotsavy(Mahi) Dama"
  params:
    author: "Mahotsavy(Mahi) Dama"
    github: "github.com/MahiDama"
    linkedin: "https://www.linkedin.com/in/mahotsavy-dama-285b3432/"
  ```

- [ ] **2. Update Home Page** (`content/_index.md`)
  - [ ] Replace hero title with your own
  - [ ] Update subtitle with your background
  - [ ] Change tagline about yourself

- [ ] **3. Add Your Projects** (`content/projects/`)
  - [ ] Edit `veritystream.md` or delete it
  - [ ] Edit `storyweave.md` or delete it
  - [ ] Add your own project files

- [ ] **4. Set Up Mentorship** (`content/mentorship/_index.md`)
  - [ ] Update mentorship offer text
  - [ ] ClandelyURL/Email 

## 🎨 Optional Customizations

- [ ] **Colors** - Edit `themes/modern-minimal/static/css/style.css` (search for `--accent-primary`)
- [ ] **Favicon** - Replace `static/favicon.svg` with your logo
- [ ] **Social Links** - Update Twitter/LinkedIn in `hugo.yaml`
- [ ] **Footer Text** - Edit `themes/modern-minimal/layouts/baseof.html`
- [ ] **Typography** - Modify font-family in CSS file

## 🚀 Deployment Checklist

Before pushing to GitHub:

- [ ] Run `hugo server -D` locally and verify all pages
- [ ] Check all project links work
- [ ] Verify mentorship form/Calendly link
- [ ] Test on mobile (F12 → toggle device toolbar)
- [ ] Create GitHub repo: `mahidama.github.io`
- [ ] Update `baseURL` to match your GitHub Pages URL
- [ ] Commit all changes

## 🔗 Quick File Reference

| Page | Edit This File | Purpose |
|------|----------------|---------|
| Home | `content/_index.md` | Hero + projects + about |
| Projects | `content/projects/*.md` | Individual projects |
| Mentorship | `content/mentorship/_index.md` | Booking form |
| Config | `hugo.yaml` | Site settings |
| Colors | `themes/modern-minimal/static/css/style.css` | Theme colors |
| Nav/Footer | `themes/modern-minimal/layouts/baseof.html` | Layout |

## 📞 Form Integration (Optional)

The form currently logs to console. To save responses:

**Option 1: Formspree**
1. Go to formspree.io
2. Create a form
3. Get your form ID
4. Update the form in `themes/modern-minimal/layouts/mentorship/single.html`

**Option 2: Netlify Forms**
If hosting on Netlify instead of GitHub Pages, add `netlify` attribute to form

**Option 3: Google Forms**
Create a Google Form and update form action URL

## 🎯 Priority Order

1. **Must do** (5 min):
   - Update `hugo.yaml`
   - Update `content/_index.md`
   - Add/edit projects

2. **Should do** (10 min):
   - Set up mentorship
   - Test locally with `hugo server -D`
   - Create GitHub repository

3. **Nice to have** (5 min):
   - Change colors
   - Update favicon
   - Add custom domain

## 🧪 Testing Before Deploy

```bash
# Start local server
hugo server -D

# Test each page:
# - http://localhost:1313/          (home)
# - http://localhost:1313/projects/ (projects list)
# - http://localhost:1313/mentorship/ (booking)

# Test on mobile:
# F12 → toggle device toolbar

# Check for errors:
# F12 → Console tab (should be empty)
```

## 🚀 Final Deployment

```bash
# Create repo
gh repo create mahidama.github.io --public

# Push code
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git push -u origin main

# Wait 1-2 minutes, then visit:
# https://MahiDama.github.io
```

## 📝 Common Edits After Launch

- **Add new project**: Create `content/projects/new-name.md`
- **Update project**: Edit the markdown file
- **Change colors**: Edit CSS variables
- **Update bio**: Edit `content/_index.md`
- **Fix bugs**: Edit HTML in `themes/modern-minimal/layouts/`

Changes auto-deploy via GitHub Actions on push.

---

✅ You're all set! Start with the "Essential Changes" section and you'll have a live portfolio in minutes.
