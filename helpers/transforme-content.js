const readingTime = require('reading-time');

/**
 * replace tag img by rim (responsive image component)
 * @param {object} e
 */
const replaceTag = e => {
  if (Array.isArray(e.children)) {
    e.children = [...e.children.map(replaceTag)];
  }
  if (e.tag === 'img') {
    return {...e, ...{tag: 'rim'}};
  }
  return e;
};

module.exports = function(document) {
  if (document.extension === '.md') {
    const {text} = document;
    const {time} = readingTime(text);
    document.readingTime = time;
    // replace all image in text
    const regex = new RegExp(/(?:!\[(.*?)\]\((.*?)\))/g);
    if (text.match(regex)) {
      document.text = text.replace(regex, '<rim src="$2" alt="$1"></rim>');
    }

    // replace tag in children body
    document.body.children = document.body.children.map(replaceTag);
  }
};
