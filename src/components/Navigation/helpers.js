export function firstHalfOfArray (arr) {
  const count = arr.length
  return arr.slice(0, count / 2)
}

export function lastHalfOfArray (arr) {
  const count = arr.length
  return arr.slice(count / 2, count)
}
