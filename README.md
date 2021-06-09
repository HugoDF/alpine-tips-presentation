# md-presentation

> Sample presentation at [slides.pdf](./slides.pdf).

An opinionated starter to write presentations in markdown.

Built on top of [reveal-md](https://github.com/webpro/reveal-md)/[reveal.js](https://revealjs.com/).

With additional processing of emoji, fragments & injection of code samples.


## Acknowledgments

- Leverages [reveal-md](https://github.com/webpro/reveal-md) for the markdown editing experience
- Uses [decktape](https://github.com/astefanutti/decktape) for PDF generation

## Development

To run `md-presentation` locally, you can:

1. clone the repo
2. `npm install` (requires Node 14+ & npm 7+)
3. `npm start`
4. open [localhost:2000](http://localhost:2000)


To generate PDFs:

Requirements:
- Node 14+
- npm 7+
- Docker


1. Clone the repo
2. `npm install` (Node 14+ & npm 7+)
3. `npm run print`
4. The updated slides will be at [slides.pdf](./slides.pdf)
