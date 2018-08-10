// Returns the native type of a value.

// Returns lowercased constructor name of value, "undefined" or "null" if value is undefined or null.

const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// examples

getType(new Set([1, 2, 3])); // 'set'