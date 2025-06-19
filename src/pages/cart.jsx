import { cartApi } from '@/api/cartApi'
import { CartItem } from '@/components/Common/CartItem'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { useCart } from '@/contexts/CartContext'
import { checkLogin, formatCurrencyEN } from '@/utils/common'
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function CartPage() {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const router = useRouter()

  const { fetchCartTotal } = useCart()

  useEffect(() => {
    if (!checkLogin) {
      router.push('/auth/login')
      return
    }

    fetchCart()
  }, [])

  const fetchCart = async () => {
    setLoading(true)
    try {
      const res = await cartApi.getCart()
      setCart(res?.items || [])
    } catch (error) {
      console.error('Failed to fetch cart:', error)
      toast.error('Failed to fetch cart')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateQuantity = async (productId, quantity) => {
    if (quantity < 1) return

    setUpdating(true)
    try {
      await cartApi.updateQuantity(productId, { quantity })
      const newCart = cart.map((item) =>
        item.product._id === productId ? { ...item, quantity } : item
      )
      setCart(newCart)
      await fetchCartTotal()
      toast.success('Updated quantity!')
    } catch (error) {
      console.error('Update failed:', error)
      toast.error('Failed to update quantity')
    } finally {
      setUpdating(false)
    }
  }

  const handleRemoveItem = async (productId) => {
    setUpdating(true)
    try {
      await cartApi.remove(productId) // ✅ gọi API xoá item
      const newCart = cart.filter((item) => item.product._id !== productId)
      setCart(newCart)
      await fetchCartTotal()
      toast.success('Removed item!')
    } catch (error) {
      console.error('Remove failed:', error)
      toast.error('Failed to remove item')
    } finally {
      setUpdating(false)
    }
  }

  const handleCheckout = () => {
    router.push('/checkout')
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  if (!checkLogin()) return null

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Your Cart
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : !cart.length ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          <>
            <Stack spacing={2}>
              {cart.map((item) => (
                <CartItem
                  key={item.product._id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                  loading={updating}
                />
              ))}
            </Stack>

            <Divider sx={{ my: 4 }} />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" fontWeight={700}>
                {formatCurrencyEN(totalPrice)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleCheckout}
              disabled={true}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
      </Container>
    </MainLayout>
  )
}
