//1. Write a JavaScript function that reverse an integer number.
function reverseNumber(n) {
  let a = String(n)
  let result = ""
  for (let i = a.length - 1; i > 0; i--) {
    result += a[i]
  }

  return result
}

console.log(reverseNumber(258231))
