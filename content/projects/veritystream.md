---
title: "VerityStream"
type: "projects"
draft: true
status: "Beta | Open Source"
problem: "The post-truth internet makes it increasingly difficult for users to distinguish fact from noise."
build_desc: "A Chrome extension providing real-time credibility checks via crowd-sourced data and LLM-driven synthesis."
github_link: "https://github.com/mahidama/veritystream"
demo_link: "https://chrome.google.com/webstore/detail/veritystream"
technologies:
  - "Python"
  - "Google Fact Check API"
  - "LLMs"
  - "Chrome Extension"
highlights:
  - title: "Backend"
    description: "Python-based pipeline querying Google Fact Check API & Wikipedia"
  - title: "Logic"
    description: "Proprietary 'Domain Health Meter' (0.0–5.0) for historical accuracy verification"
  - title: "UX"
    description: "Highlight-to-Verify overlay for seamless integration into browsing"
---

## Engineering Deep Dive

### Architecture
- **Facts Service**: Aggregates data from Google Fact Check API, Wikipedia, and crowd-sourced verification
- **LLM Synthesis**: Uses modern LLMs to cross-reference and verify information
- **Domain Health Meter**: Custom scoring algorithm tracking historical accuracy (0.0–5.0 scale)

### How It Works
1. **Highlight Text**: Select any text on a webpage
2. **Instant Check**: VerityStream queries its knowledge base
3. **Live Overlay**: See credibility score + source citations
4. **Deep Dive**: Click for full analysis with citations

### Tech Stack
- **Frontend**: Chrome Extension API, JavaScript, React
- **Backend**: Python FastAPI
- **AI**: LLM integration for fact synthesis
- **Data**: Google Fact Check API, Wikipedia API

### Why This Matters
In an age of information overload, VerityStream democratizes credibility. No waiting for "fact-checking journalists"—get instant, data-driven feedback on any claim.

---

**Status**: Active development. Open source contributions welcome.  
**Last Updated**: [GitHub shows this automatically]
