# Gulp Starter Kit

## Requirements
This should be installed on your computer in order to get up and running:

- [Node.js](https://nodejs.org/en/) (Required node version is >= 10.0)

*Important for Ubuntu users*

Run: `sudo apt-get install dh-autoreconf`

## Getting Started
In order to get started, make sure you are meeting all requirements listed above.
Then, just go ahead and download the Gulp Starter Kit.

1. Fork this project and rename your forked project
2. Clone this new project
3. Change your working directory to your project folder by executing `cd your-project-name`.
4. Install all dependencies by executing `npm install`.
5. Spin up your web development environment with the command `npm run dev`.
6. Start coding!

## Gulp Starter Kitscripts
The Gulp Starter Kit offers two different build scripts:

1. `npm run build`: This is used to build all files and run all tasks without serving a development server and watching for changes.
2. `npm run dev`: This is the normal development script used to build all files and run all tasks, but also to serve a development server and watch for changes.

### How can I specify for which browsers CSS code should be autoprefixed?
The recommended way of specifying which browsers should be targeted by the CSS autoprefixer is to add a `browserslist` key to `package.json`:

```json
{
  "browserslist": [
    "last 3 versions",
    "> 0.5%"
  ]
}
```

### What types of images are supported?
The following types of images are currently supported:

- PNG
- JPG / JPEG
- GIF
- SVG
- ICO (not compressed)
