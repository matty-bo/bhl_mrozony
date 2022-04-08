export const toPrecision = (value, decimals) => {
  return Math.round((value + Number.EPSILON) * decimals * 10) / (decimals * 10)
}