export function truncate(input = '', len = 0) {
  if (input.length > len) return input.substring(0, len) + '...'
  else return input
}

export const closePaymentModal = () => {
  document
    .getElementsByName('checkout')[0]
    .setAttribute(
      'style',
      'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;'
    )
  document.body.style.overflow = ''
}
