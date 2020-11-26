export function truncate (input, len) {
  if (input.length > len) return input.substring(0, len) + '...'
  else return input
}
