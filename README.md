# Interactive Love Letter Web Application

A mobile-first, scroll-driven interactive love letter website designed with a luxury editorial aesthetic (Apple, Nothing, COS, Aesop style). Built with pure **HTML5 + CSS3 + Vanilla ES6+ JavaScript** — zero frameworks, zero external dependencies, zero build tools.

---

## 📁 File & Folder Structure

```
c:\xampp\htdocs\lastActOfLove\
├── index.html             # Main semantic HTML structure
├── css/
│   └── style.css          # CSS design system, layout variants & animations
├── js/
│   └── script.js          # IntersectionObserver, typewriter logic & letter data
├── Assets/
│   └── Pictures/          # 24 portrait photos (ch1-01.jpg ... ch4-06.jpg)
└── README.md              # Project documentation
```

---

## 🖼️ Photos & Image Standard

The site renders 24 photos across 4 distinct chapter layouts. Photos are expected in the `Assets/Pictures/` directory using the following exact naming convention:

- **Chapter 1**: `ch1-01.jpg`, `ch1-02.jpg`, `ch1-03.jpg`, `ch1-04.jpg`, `ch1-05.jpg`, `ch1-06.jpg`
- **Chapter 2**: `ch2-01.jpg`, `ch2-02.jpg`, `ch2-03.jpg`, `ch2-04.jpg`, `ch2-05.jpg`, `ch2-06.jpg`
- **Chapter 3**: `ch3-01.jpg`, `ch3-02.jpg`, `ch3-03.jpg`, `ch3-04.jpg`, `ch3-05.jpg`, `ch3-06.jpg`
- **Chapter 4**: `ch4-01.jpg`, `ch4-02.jpg`, `ch4-03.jpg`, `ch4-04.jpg`, `ch4-05.jpg`, `ch4-06.jpg`

To swap out any image, simply overwrite the corresponding file in `Assets/Pictures/` with your new image of the same filename. No code modifications are required.

---

## ✍️ Editing the Letter Content

The letter text is stored in `js/script.js` inside the `letterData` array.

To modify the text or add/remove paragraphs:
1. Open `js/script.js`.
2. Locate the `letterData` array at the top of the file.
3. Edit any paragraph string in `paragraphs`. The first sentence of each paragraph will automatically receive the subtle typewriter reveal effect.

---

## 🎨 Color Palette & Customization

All color tokens are defined in `css/style.css` under the `:root` pseudo-class:

```css
:root {
  --color-bg: #0D0D0D;           /* Dark background */
  --color-bg-secondary: #171717; /* Card background */
  --color-text-primary: #F7F5F2; /* Warm white text */
  --color-text-muted: #9B9B9B;   /* Subtitle & muted text */
  --color-accent: #D6C2A1;       /* Warm champagne accent */
  --color-border: #2A2A2A;       /* Subtle borders */
}
```

---

## 🚀 Running Locally

You can preview and run the website in any of the following ways:

1. **Direct File Opening**:
   Double click `index.html` to open directly in any modern web browser via the `file://` protocol.

2. **PHP / XAMPP Local Server**:
   Start Apache in XAMPP and visit:
   `http://localhost/lastActOfLove/`

3. **Python HTTP Server**:
   Run in terminal inside project directory:
   `python -m http.server 8000`
   and visit `http://localhost:8000/`.
