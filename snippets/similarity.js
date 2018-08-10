// Returns an array of elements that appear in both arrays.

// Use Array.filter() to remove values that are not part of values, determined using Array.includes().

// OJO!!! Array.includes() no es compatible con Internet Explorer

const similarity = (arr, values) => arr.filter(v => values.includes(v));

//examples
similarity([1, 2, 3], [1, 2, 4]); // [1,2]