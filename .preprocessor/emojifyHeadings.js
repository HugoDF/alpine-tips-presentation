const emoji = require('node-emoji')

const headingRegex = /(?<=#)#+.*/g
const emojifyAbleRegex = /:\w*:/

function emojify(markdown) {
  return markdown.replace(
    headingRegex,
    (headingText) => headingText.search(emojifyAbleRegex) > -1
      ? emoji.emojify(headingText)
      : headingText
  )
}

module.exports = emojify
