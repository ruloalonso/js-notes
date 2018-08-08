// expected output

/* var nums = [1,2,3,4,5]
    
// `map` is your exported function
var output = map(nums, function double(item) {
  return item * 2
})

console.log(output) // => [2,4,6,8,10] */

module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce(function(acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr))
    return acc
  }, [])
}