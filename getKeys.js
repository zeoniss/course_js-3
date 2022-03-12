//6. Write function, which returns array of keys of an object.
//getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”,
//“keyTwo”, “keyThree”]
function getKeys() {
  const keys = Object.keys({ keyOne: 1, keyTwo: 2, keyThree: 3 })
  return keys
}

console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }))
