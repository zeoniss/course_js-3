// 4. Write function, which returns filtered array based on function, which passed as a parameter.
// Reuse function from task 2.
function isBigEnough(value) {
  return value > 3
}

let filtered = [2, 5, 1, 3, 8, 6].filter(isBigEnough)

console.log(filtered)
