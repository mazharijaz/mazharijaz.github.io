# Personal site

## Installation
Install Jekyll:

```
gem install jekyll bundler
```

Install bundle dependencies:

```
bundle install
```

Jekyll server (`CTRL+C` to stop)

```
jekyll serve
```

## Buid assets
To build front-end assets: stylesheets and javascript, run:
```
npm run build
```

To run full build (assets and newly generated HTML with Jekyll:
```
npm run build:full
```

To check changes at source .scss and .js files and automatically re-generated files, use the watch script:

```
npm run watch
```

Explore [package.json](package.json) file to find out what is included to the scripts.
