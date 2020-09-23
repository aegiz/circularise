# W.Green agency theme switcher

The objective of this project is to provide CTA on wgreen.org to switch themes easily.
On the technical side I used a Chrome extension to insert the HTML, CSS and JS when the page loads.

## Demo:

![demo](demo/demo_1.gif)

## Features:

-  Switch automatically to dark theme if its the user OS preferences.
-  3 different themes available (classic, dark, greener).
-  Persist accross pages.

## Dev stack

-  JavaScript
-  CSS

## Project Structure

```sh
.
├── demo/                     # This folder contains all the demo files.
│   └── demo.mov              # Quick demo in Mov format.
│   └── demo_1.gif            # Quick demo in GIF format.
├── icon/                     # The icons which are displayed in the Chrome's toolbar.
│   └── icon_w_16.png         # 16*16 icon.
│   └── icon_w_32.png         # 32*32 icon.
├── content.js                # Javascript which is injected to the page by the extension
├── manifest.json             # Config file that configure the rights and permissions for this extension
├── README.md                 # This file
└── styles.css                # CSS which is injected to the page by the extension (and override the existing styles)
```

## Usage:

Install this Chrome extension manually:

1. Download the content of this folder on Github
2. Then type in your URL: chrome://extensions/
3. Drag and drop the folder there and activate the extension.
4. Go to https://www.wgreen.org, you should now be able to see a theme switcher.

## Inspiration and resources:

-  https://www.wgreen.org
-  https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
-  https://mxb.dev/blog/color-theme-switcher/
-  https://blog.lateral.io/2016/04/create-chrome-extension-modify-websites-html-css/
