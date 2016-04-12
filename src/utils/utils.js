import R from 'ramda'

export function contrastColor (color) {
  const [r, g, b] = R.splitEvery(2, R.drop(1, Array.from(color))).map(x => parseInt(x.join(''), 16))
  const hex = (0.299 * r + 0.587 * g + 0.114 * b > 186) ? 0 : 255
  return `rgb(${hex}, ${hex}, ${hex})`
}
