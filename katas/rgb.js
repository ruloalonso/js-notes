function rgb(r, g, b) {
  return Array.prototype.slice.call(arguments).reduce((prev, next) => {
    console.log(prev);
    if (next <= 0) return prev + '00';
    if (next >= 255) return prev + 'FF';
    return prev + next.toString(16).toUpperCase();
  }, '');
}

console.log(rgb(244,244,-1));