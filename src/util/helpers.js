export function truncate(input = '', len = 0) {
  if (input.length > len) return input.substring(0, len) + '...'
  else return input
}
