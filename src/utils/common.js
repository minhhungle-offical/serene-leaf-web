export function formatCurrencyEN(value, currency = 'USD') {
  if (typeof value !== 'number') value = Number(value) || 0

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}
