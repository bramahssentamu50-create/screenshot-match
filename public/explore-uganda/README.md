# Explore Uganda – Discover the Pearl of Africa

Individual website project for **HCT 3102: Internet and Web Design**, Kyambogo University.
Built with plain **HTML5, CSS3 and vanilla JavaScript** – no frameworks.

## Folder structure
```
explore-uganda/
├── index.html          Home page
├── about.html          About, mission, vision, objectives
├── destinations.html   National parks, natural & cultural attractions
├── culture.html        Kingdoms, dances, food, clothing, music, languages
├── gallery.html        Filterable photo gallery
├── travel-guide.html   Travel tips, table, embedded Google Map (iframe)
├── contact.html        Contact form
├── css/style.css       The ONE stylesheet used by every page
├── js/script.js        Menu, gallery filter, form message
├── images/             Photos and favicon/logo (favicon.svg)
└── README.md
```

## Open in Visual Studio Code
1. Unzip the folder.
2. Open VS Code → **File → Open Folder…** → choose `explore-uganda`.
3. Double-click `index.html` in your file explorer to view it in a browser,
   or install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

## How to edit
- **Text:** open any `.html` file and change the words between tags, e.g. `<p>...</p>`.
- **Images:** put a new photo in `images/`, then change `src="images/your-photo.jpg"` and its `alt` text.
  Hero/banner backgrounds are set in `css/style.css` (search for `url(`).
- **Colours:** change the variables at the top of `css/style.css` (`--green`, `--gold`, `--brown`...).
- **Fonts:** change `--font-heading` / `--font-body` in `css/style.css`.
- **Navigation:** the menu is repeated at the top of every page inside `<nav>` – edit all pages.

## Publish
**GitHub Pages:** create a repository, upload all files (keep `index.html` at the top level),
go to **Settings → Pages**, choose branch `main` / root, and save. Your site appears at
`https://username.github.io/repository-name/`.

**Netlify:** go to app.netlify.com → **Add new site → Deploy manually** and drag the folder in.

## Validation
Check each page at https://validator.w3.org/ (upload file) and CSS at https://jigsaw.w3.org/css-validator/.

## Notes
Photos are illustrative images; some destinations share a photo. Replace them with your own
photos for best results. Contact details are placeholders.
