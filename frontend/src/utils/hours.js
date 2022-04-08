export const toHour = (value) => {
  let parsedValue = value;

  if (!Number.isInteger(parsedValue)) {
    parsedValue = 0;
  }

  return `${ parsedValue }:00`;
}