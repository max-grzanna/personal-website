const { htmlToText } = require('html-to-text');

export default function readingTime(html) {
  const content = htmlToText(html);
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  return time;
}
