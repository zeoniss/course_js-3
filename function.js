// 3. Write function, which returns transformed array based on function, which is passed as a
// parameter. Reuse function from task 2.

function map(array, callback) {
  const accumulator = []
  for (let item of array) {
    accumulator.push(callback(item))
  }

  return accumulator
}

console.log(
  map([1, 2, 3, 4, 5], function (el) {
    return el * 2
  })
)
