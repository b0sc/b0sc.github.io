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

**Make sure that Prettier is installed in your text editor.** Add this to your `settings.json` in VS Code, as Prettier alone will not format Astro files correctly. You need this additional formatter for Astro. The npm plugins are taken care with devDependencies you don't have to worry about that.

`{
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}`

You can also run this command for installing the extension. Open up the terminal in vscode and paste this line .

`ext install astro-build.astro-vscode`

## Issues

If you do not find the issue you are looking for, please create a new [issue](https://github.com/b0sc/b0sc.github.io/issues/new?assignees=&labels=&projects=&template=custom.md&title=) after reviewing our [website](https://b0sc.github.io/).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🌟 Resources

- [Astro documentation](https://docs.astro.build).
  - `npm run astro ...` Run CLI commands like `astro add`, `astro check`
  - `npm run astro -- --help` Get help using the Astro CLI

## Project Structure

The project is built using Astro.js and Tailwind CSS. Here's a quick look at the project structure:

```bash
.
├── .astro
│   ├── settings.json
│   └── types.d.ts
├── astro.config.mjs
├── public/
# Any static assets, like images, can be placed in the `public/` directory.
├── src
│   ├── components
# There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.
│   │   ├── Data/
│   │   ├── Icons/
│   │   ├── Navbar.astro
│   │   └── Topic.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
# Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── blogs
│   │   │   └── [id].astro
│   │   └── index.astro
│   └── styles
│       └── global.css
└── tsconfig.json
```

<!--
references:
https://github.com/manulthanura/Positivus
https://github.com/godruoyi/gblog/tree/gblog-template
 -->
