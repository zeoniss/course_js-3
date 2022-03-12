// 5. Write function, which returns array of names of people, who are over 18 and their favorite
//fruit is apple. Reuse functions from task 3 and 4.
let data = [
  {
    age: 32,
    name: "Diana",
    favoriteFruit: "onion",
  },
  {
    age: 23,
    name: "Roksolana",
    favoriteFruit: "apple",
  },
  {
    age: 17,
    name: "Anjey",
    favoriteFruit: "apple",
  },
  {
    age: 17,
    name: "Sibill",
    favoriteFruit: "pineapple",
  },
]

function getArray(array, func) {
  for (let item of array) {
    func(item)
  }
}

function map(array, func) {
  let result = []
  getArray(array, (item) => {
    result.push(func(item))
  })
  return result
}

function filter(array, func) {
  let result = []
  getArray(array, (item) => {
    if (func(item) === true) {
      result.push(item)
    }
  })
  return result
}

function getAdultAppleLovers(array) {
  return map(
    filter(array, (item) => item.age >= 18 && item.favoriteFruit == "apple"),
    (item) => item.name
  )
}

console.log(getAdultAppleLovers(data))
