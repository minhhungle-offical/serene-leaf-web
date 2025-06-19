export function formatCurrencyEN(value, currency = 'USD') {
  if (typeof value !== 'number') value = Number(value) || 0

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export const isBrowser = () => typeof window !== 'undefined'

export const checkLogin = () => {
  if (!isBrowser) return false
  const token = localStorage.getItem('token')
  if (!token) {
    toast.info('You need to log in first')
    router.push('/auth/login')
    return false
  }
  return true
}
