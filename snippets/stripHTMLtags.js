// Removes HTML/XML tags from string.

const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// examples

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'