function getShortMessages(messages) {
  return messages
  .filter(filterShortMessages)
  .map(object => object.message);
}

function filterShortMessages(object) {
  return object.message.length < 50;
}

module.exports = getShortMessages;
