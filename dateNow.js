// 8. Write function, which returns formatted date.

function join(t, a, s) {
  function format(m) {
    let f = new Intl.DateTimeFormat("en", m)
    return f.format(t)
  }
  let [day, month, year] = a.map(format)
  return `It is ${day} of ${month}, ${year}`
}
let a = [
  {
    day: "numeric",
  },
  {
    month: "short",
  },
  {
    year: "numeric",
  },
]
let s = join(new Date("2018-08-27T01:10:00"), a)
console.log(s)
