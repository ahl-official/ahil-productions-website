# AHL Productions — Website

A multi-discipline production house website built with React & JavaScript.

## 🚀 Getting Started

```bash
cd ahl-productions
npm install
npm start
```
Opens at **http://localhost:3000** · Build: `npm run build`

---

## 🖼️ Setting Up Gumlet (Images)

Gumlet handles all image delivery — auto-resizing, WebP/AVIF conversion, lazy loading, and CDN.

### Step 1 — Create a Gumlet account
Go to [gumlet.com](https://www.gumlet.com) and sign up (free tier available).

### Step 2 — Create an Image Source
In your Gumlet dashboard → **Image Sources** → **Add Source**.
Choose where your images live: Amazon S3, Google Cloud, a URL/web folder, or upload directly.

### Step 3 — Get your subdomain
After creating a source you'll get a URL like:
```
https://ahlproductions.gumlet.io
```

### Step 4 — Update the config
Open `src/config/gumlet.js` and paste your URL:
```js
export const GUMLET_BASE_URL = 'https://ahlproductions.gumlet.io';
```

### Step 5 — Upload your images
Upload to wherever your Gumlet source points (S3 bucket, web server, etc.).
Then use just the **filename** (no domain) in the components.

### Image filenames reference

| Component   | Filename in code              | Recommended size |
|-------------|-------------------------------|------------------|
| About panel 1 | `about-direction.jpg`       | 600×900px        |
| About panel 2 | `about-production.jpg`      | 600×440px        |
| About panel 3 | `about-post.jpg`            | 600×440px        |
| Work card 1   | `work-shattered-horizons.jpg` | 1200×700px     |
| Work card 2   | `work-neon-frequency.jpg`   | 1200×700px       |
| Work card 3   | `work-brand-forward.jpg`    | 1200×700px       |
| Work card 4   | `work-undercurrent.jpg`     | 1200×700px       |
| Work card 5   | `work-kinetic-forms.jpg`    | 1200×700px       |
| Work card 6   | `work-still-waters.jpg`     | 1200×700px       |
| Team member 1 | `team-arjun.jpg`            | 600×800px        |
| Team member 2 | `team-priya.jpg`            | 600×800px        |
| Team member 3 | `team-rohan.jpg`            | 600×800px        |
| Team member 4 | `team-aisha.jpg`            | 600×800px        |

### Using GumletImage in your own components
```jsx
import GumletImage from './components/GumletImage';

<GumletImage
  src="your-image.jpg"    // just the filename
  alt="Description"
  width={800}             // desired display width
  quality={80}            // 1-100
  fit="cover"             // cover | contain | fill
  lazy={true}             // lazy load (default true)
/>
```

---

## 🎬 Adding Your Videos

Create a `videos/` folder inside `public/` and drop in your `.mp4` files:

```
public/videos/
├── hero-reel.mp4         ← Hero background loop
├── intro-reel.mp4        ← Cinematic launch screen
├── about-01/02/03.mp4    ← About section panels
├── work-01 → work-06.mp4 ← Work card hover previews
└── team-01 → team-04.mp4 ← Team card hover clips
```

---

## 📁 Project Structure

```
src/
├── config/
│   └── gumlet.js              ← ⭐ Set your Gumlet URL here
├── components/
│   ├── GumletImage.jsx        ← Reusable Gumlet image component
│   ├── Intro.jsx              ← Cinematic launch screen
│   ├── Cursor.jsx             ← Custom cursor
│   ├── Navbar.jsx             ← Navigation
│   ├── Hero.jsx               ← Hero (video bg)
│   ├── Marquee.jsx            ← Scrolling ticker
│   ├── About.jsx              ← About (Gumlet images + video)
│   ├── Stats.jsx              ← Animated counters
│   ├── Services.jsx           ← Services grid
│   ├── Work.jsx               ← Portfolio (Gumlet images + hover video)
│   ├── Showreel.jsx           ← Showreel player
│   ├── Team.jsx               ← Team (Gumlet images + hover video)
│   ├── Contact.jsx            ← Contact
│   ├── Footer.jsx             ← Footer
│   └── useScrollReveal.js     ← Scroll animation hook
└── styles/
    ├── global.css
    ├── Intro.css
    ├── Navbar.css
    ├── Hero.css
    └── sections.css           ← All sections + video + mobile
```

## 🎨 Colour Palette

| Name       | Hex       |
|------------|-----------|
| Charcoal   | `#212922` |
| Slate Grey | `#77878B` |
| Teal       | `#488286` |
| Light Blue | `#B7D5D4` |
| Off White  | `#F2F0EB` |


