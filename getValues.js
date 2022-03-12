// 7. Write function, which returns array of values of an object.
// getValues({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]
function getValues() {
  const values = Object.values({ keyOne: 1, keyTwo: 2, keyThree: 3 })
  return values
}

console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }))
