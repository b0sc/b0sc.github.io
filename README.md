# Official Website of Birendra Open Source Club

Made possible with the contributions of the BOSC community. 🚀

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to contribute?

Feel free to check [Contribution Methods](CONTRIBUTING.md) and follow [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

**Make sure that Prettier is installed in your text editor.** Prettier alone will not format Astro files correctly, so add this to your VS Code `settings.json` (the npm plugins are already handled by `devDependencies`):

```json
{
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Also install the Astro extension by opening the VS Code command palette (`Ctrl+P`) and running:

```
ext install astro-build.astro-vscode
```

**Heads up for dev mode:** The search bar won’t magically work until you build the site first. Don’t worry `npm postinstall` takes care of an initial build right after installing. But if you add new content, you’ll need to run `npm run build` again so it gets indexed.
Want the geeky details? Check out [astro-pagefind](https://github.com/shishkin/astro-pagefind)

## Issues

If you do not find the issue you are looking for, please create a new [issue](https://github.com/b0sc/b0sc.github.io/issues/new?assignees=&labels=&projects=&template=custom.md&title=) after reviewing our [website](https://bosc.org.np/).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🌟 Resources

- [Astro documentation](https://docs.astro.build).
  - `npm run astro ...` Run CLI commands like `astro add`, `astro check`
  - `npm run astro -- --help` Get help using the Astro CLI

## Project Structure

The site is built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

```text
.
├── .github/                  # Issue and pull request templates
├── public/                   # Static assets served as-is (images, icons, logos)
│   ├── blogs_assets/<post>/  # Images for a blog post; folder name matches the post's file name
│   ├── events/<id>/          # Event photos; <id> matches the event id in src/data/events.json
│   └── team/, mentors/, ...  # Profile pictures and other images
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── Cards/            # Card components (articles, events, members, ...)
│   │   ├── Icons/            # SVG icon components
│   │   └── TopEvent/         # Sections of the home page "events" block
│   ├── content/
│   │   └── blog/             # Blog articles in Markdown
│   ├── data/                 # JSON data (events, team, notes, opportunities, ...)
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML layout used by every page
│   ├── pages/                # File-based routes (see below)
│   ├── styles/               # Global styles and theme tokens
│   ├── utils/                # Helper functions
│   └── content.config.ts     # Content collection schema for blog articles
├── astro.config.mjs
└── tailwind.config.mjs       # Brand colors, breakpoints and fonts
```

### Routes

| Route                         | Source                                      |
| :---------------------------- | :------------------------------------------ |
| `/`                           | `src/pages/index.astro`                     |
| `/about`                      | `src/pages/about.astro`                     |
| `/explore/<section>`          | `src/pages/explore/*.astro`                 |
| `/explore/article/<slug>`     | `src/content/blog/*.md`                     |
| `/explore/events/<id>`        | `src/data/events.json`                      |
| `/notes/<faculty>/<semester>` | `src/data/notes-<faculty>.json`             |
| `/internships`                | `src/data/internships.json`                 |
| `/mentorship`                 | `src/pages/mentorship/`                     |
| `/blogs/...`                  | Legacy URLs that redirect to `/explore/...` |

### Adding content

- **Blog article:** add `src/content/blog/<slug>.md` using kebab-case for the file name. The frontmatter fields (`title`, `pubDate`, `author`, `authImage`, `coverImage`, `slug`, `summary`, `type`) are validated by `src/content.config.ts`. Put images in `public/blogs_assets/<slug>/` and reference them with site-absolute paths such as `/blogs_assets/<slug>/cover.png`. Do not prefix paths with `/public`.
- **Event:** add an entry to `src/data/events.json` and put its photos in `public/events/<id>/`.
- **Member, executive or alumni:** edit `src/data/team.json`.

### Styling

- Use the brand colors from `tailwind.config.mjs`: `lime-500` for accents and `zinc-900` for primary buttons. They extend Tailwind's default palette, so standard utilities also work.
- Pages under `/explore` use the CSS theme tokens (`--text-color`, `--text-muted`, ...) defined in `src/styles/global.css`.
