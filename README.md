# Clements NCHS Website — Officer Guide

This guide explains how to update the website without needing to know how to code. All common tasks are covered below.

---

## Getting Started

### What you need installed
- [Node.js](https://nodejs.org/) (download the LTS version)
- [Git](https://git-scm.com/)
- A code editor — [VS Code](https://code.visualstudio.com/) is recommended

### Setting up the project on your computer
1. Open a terminal (search "Terminal" on Mac or "Command Prompt" on Windows)
2. Run the following commands one at a time:
```
git clone https://github.com/ClementsCSNHS/ClementsNCHS.git
cd nchs-website
npm install
npm run dev
```
3. Open your browser and go to `http://localhost:5173` to see the site live on your computer

---

## How to Add a Meeting Post

Meeting posts show up on the **News & Events** page and each get their own individual page.

### Step 1 — Add your image
Place the meeting photo inside:
```
src/assets/news/
```
Name it something simple with no spaces, like `march-2025-meeting.png`.

### Step 2 — Open the posts file
Open this file in VS Code:
```
src/data/posts.jsx
```

### Step 3 — Copy this template and fill it in
Add a new entry at the **top** of the `posts` array (so newest posts show first):

```jsx
{
  id: 'march-2025',
  title: 'March 2025 NCHS Meeting',
  date: 'March 2025',
  excerpt: 'A short 1-2 sentence preview that appears on the News page.',
  image: march2025Img,
  body: (
    <>
      <p>First paragraph of your post goes here.</p>
      <p>Second paragraph goes here.</p>
      <ul>
        <li>Bullet point one</li>
        <li>Bullet point two</li>
      </ul>
    </>
  ),
},
```

### Step 4 — Add the image import
At the top of `posts.jsx`, add a line importing your image alongside the others:
```jsx
import march2025Img from '../assets/news/march-2025-meeting.png';
```

### Step 5 — Save and check
Save the file. If your local server is running (`npm run dev`) you should see the post appear immediately at `http://localhost:5173/news`.

---

## How to Push Changes to the Live Site

Once you've made your changes locally and everything looks good:

```
git add .
git commit -m "add march 2025 meeting post"
git push
```

Netlify will automatically redeploy the site within 1-2 minutes. You can watch the progress at [netlify.com](https://netlify.com) under your site's **Deploys** tab.

---

## How to Update the Points Spreadsheet

The points page embeds a Google Sheet directly. To update points:
1. Open the Google Sheet linked on the Points page
2. Edit it normally — changes show up on the website automatically, no code needed

---

## How to Update Meeting Dates on the Calendar

The calendar on the News & Events page is a Google Calendar embed. To add or change events:
1. Open Google Calendar and find the NCHS calendar
2. Add, edit, or delete events normally
3. Changes appear on the website within a few minutes automatically

---

## How to Update Page Text

All page text lives in the corresponding page file inside `src/pages/`. Here's the map:

| Page | File to edit |
|---|---|
| Home | `src/pages/Home.jsx` |
| About Us | `src/pages/About.jsx` |
| Points | `src/pages/Points.jsx` |
| News & Events | `src/pages/News.jsx` |
| FAQ | `src/pages/Faq.jsx` |
| Volunteering | `src/pages/Volunteering.jsx` |

Open the file, find the text you want to change, edit it, save, and push.

---

## How to Update Officer Information

Officer names, titles, and photos are all in:
```
src/pages/About.jsx
```

### To change a name or title
Find the `officers` array near the top of the file and edit the relevant `name` or `title` field.

### To change a photo
1. Add the new photo to `src/assets/`
2. Update the import at the top of `About.jsx` to point to the new file
3. The officer card will update automatically

---

## Common Mistakes to Avoid

- **Don't delete commas** — every entry in an array needs a comma after the closing `}` except the very last one
- **Don't use straight quotes in text** — if your text contains an apostrophe like `it's`, write it as `it&apos;s` inside JSX, or use curly quotes
- **Always test locally first** — run `npm run dev` and check the page before pushing to GitHub
- **Image file names should have no spaces** — use hyphens instead, e.g. `march-meeting.png` not `march meeting.png`

---

## Need Help?

Contact the previous webmaster or refer to the original developer (Claire Weng) for anything not covered here.