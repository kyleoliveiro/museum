<div align="center">
  <h1>🏛️<br>Museum</h1>
    
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
</div>

Front-end design systems can get messy; Especially with many different tools working together in modern development toolchains.

Museum provides a **delightful workflow for visualising, managing, and documenting design tokens** in front-end projects.

---

## Getting started

Museum's command-line interface helps you get started quickly.

1. Install the CLI with your favorite package manager

   ```bash
   $ yarn global add @museum/cli
   ```

2. Initialize Museum in your project. This will create a `.museum` directory and related files

   ```
   $ museum init
   ```

3. Launch the Museum manager app to manage design tokens

   ```
   $ museum open
   ```

4. Generate a styleguide containing design token documentation
   ```
   $ museum build
   ```

---

## Usage with Tailwind CSS

Tailwind CSS is awesome tool for using design tokens in HTML, JS, Sass and CSS variables.

Museum integrates seamlessly with Tailwind CSS:

`tailwind.config.js`

```js
const museum = require("@museum/core");
const museumConfig = require('./museum.config.json')

module.exports = {
  theme: museum.adaptors.tailwind.theme(),
  plugins: [
    museum.adaptors.tailwind.plugin,
  ],
};
```

Tailwind generates CSS classes that you can use in HTML,

---

## Museum manager

`$ museum open` will launch a visual interface for previewing and managing design tokens.

![](https://placehold.it/1024x560)

---

## Museum styleguide

`$ museum build` will build and export a static HTML styleguide containing design token documentation.

![](https://placehold.it/1024x560)

---

## Museum specimens

Museum specimens allow you to include design token previews in documentation generated by other styleguide generators.

Projects with documentation already covered by a tool like Storybook or Styleguidist may not want to maintain a seperate set of documentation for design tokens. In these cases, Museum's design token previews are available as standalone React components in the `@museum/specimens` library.

### Example usage with Storybook

`stories/style/colors.stories.mdx`

```md
import { SpacingSpecimen } from "@museum/specimens";
import { tokens } from "@museum/core";

# Styles

<div>
  {tokens("spacing").map(token => {
    <SpacingSpecimen token={token} />;
  })}
</div>
```

## FAQ

- **Which front-end frameworks are supported?**

  **All of them!** Museum's integration with Tailwind CSS lets you use Museum design tokens with any front-end framework.

- **Should I check in the `museum.config.json` file to source control?**

  **Yes.**

- **Can I edit the `museum.config.json` file directly?**

  You can. Just take note that this file is overwritten whenever you make changes with Museum manager.
