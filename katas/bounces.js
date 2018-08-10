// function bouncingBall(h,  bounce,  window) {
//   if (arguments.length < 3) return -1;
//   let count = 0;
//   function bouncing(h,  bounce,  window) {
//     h = h * bounce;
//     console.log('h', h);
//     console.log('count', count);
//     if (h > window) {
//       count += 2;
//       bouncing(h, bounce, window); 
//     } else {
//       count++;
//       console.log('count', count);
//       return count; 
//     }
//   }
//   console.log(bouncing(h,  bounce,  window));
// }

function bouncingBall(h,  bounce,  window, count = 0) {
  if (arguments.length < 3 || bounce >= 1 || bounce === 0) return -1;
  h *= bounce;
  if (h >  window) {
    count = count + 2;
    return bouncingBall(h,  bounce,  window, count);
  } else {
    return ++count;
  }
};

//Solution 2
function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) {
    while (h > window) {
      rebounds+=2,
      h *= bounce;
    }
  }  
  return rebounds;
}
