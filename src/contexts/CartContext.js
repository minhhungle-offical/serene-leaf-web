import { createContext, useContext, useEffect, useState } from 'react'
import { cartApi } from '@/api/cartApi'
import { useAuth } from './AuthContext'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartTotal, setCartTotal] = useState(0)
  const { token } = useAuth()

  const fetchCartTotal = async () => {
    try {
      const res = await cartApi.getCart()

      setCartTotal(res?.total || 0)
    } catch (error) {
      console.error('Failed to fetch cart total:', error)
    }
  }

  useEffect(() => {
    if (token) {
      fetchCartTotal()
    }
  }, [token])

  return (
    <CartContext.Provider value={{ cartTotal, fetchCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
