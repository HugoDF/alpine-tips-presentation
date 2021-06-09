---
title: Markdown Presentation Starter
theme: white
revealOptions:
  controls: false
---

# `md-presentation`

An opinionated starter to write presentations in markdown.

Built on top of [reveal-md](https://github.com/webpro/reveal-md)/[reveal.js](https://revealjs.com/).

With additional processing of emoji, fragments & injection of code samples.

---

Hugo Di Francesco

`<Title>` at `<Company>`

Slides: [slide-url](https://codewithhugo.com)

Twitter: [@hugo__df](https://twitter.com/hugo__df)

---

## Contents :whale:

1. Emoji Support
2. Injection of samples
3. Fragment support
4. npm scripts

---

## 1. Emoji Support

To give the presentation a bit of colour.

#### Headings support emoji :tada:


---

## 2. Injection of samples

There's support for a `<sample>` tag to inject code samples.

This facilitates writing/maintaining the samples as standalone files.

Define the path to inject using the `path="./relative-path.ext"` attribute.

----

Python sample:

<sample path="./samples/sample.py"></sample>

JavaScript Sample:

<sample path="./samples/sample.js"></sample>

---

## 3. Fragment Support

There's fragment support

<fragment>1. </fragment>
<fragment>2. </fragment>
<fragment>3.</fragment>
<fragment>...</fragment>

---

## 4. Scripts

- `npm run build`: build to `static` (HTML/CSS)
- `npm run print`: build to PDF
- `npm start`: start the local server
- `npm run dev`: start the local server in watch mode

---

## Acknowledgments :book:

- Leverages [reveal-md](https://github.com/webpro/reveal-md) for the markdown editing experience
- Uses [decktape](https://github.com/astefanutti/decktape) for PDF generation
- Initially used for [async-js-presentation](https://github.com/HugoDF/async-js-presentation), see [codewithhugo.com/async-js](https://codewithhugo.com/async-js)
