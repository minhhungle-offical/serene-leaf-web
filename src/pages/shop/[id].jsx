import { MainLayout } from '@/components/Layouts/MainLayout'
import { useProduct } from '@/hooks/useProduct'
import { formatCurrencyEN } from '@/utils/common'
import {
  Box,
  Button,
  Container,
  Divider,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ProductDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, error } = useProduct(id)

  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Giả sử bạn dùng localStorage hoặc Redux hoặc gọi API
    const cartItem = {
      productId: data._id,
      name: data.name,
      price: data.price,
      quantity,
      imageUrl: data?.image?.url,
    }

    console.log('Add to Cart:', cartItem)
    // 👉 Ở đây bạn có thể dispatch Redux action, hoặc lưu vào localStorage
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`)
  }

  return (
    <MainLayout>
      {error && <div>Failed to load product.</div>}
      {!id || isLoading ? (
        <LinearProgress />
      ) : (
        <Container>
          <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5, py: 10 }}>
            <Box
              sx={{
                width: { xs: '100%', sm: '50%' },
                height: 'auto',
              }}
            >
              <Stack
                sx={{
                  position: 'relative',
                  p: 1.5,
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={data?.image?.url}
                  alt="image"
                  loading="lazy"
                  boxShadow={3}
                  sx={{ position: 'sticky', top: 40, width: '100%' }}
                />
              </Stack>
            </Box>

            <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
              <Box sx={{ p: 1.5 }}>
                <Stack spacing={3}>
                  <Typography variant="h4" fontWeight={600}>
                    {data?.name}
                  </Typography>

                  <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                    {data?.shortDescription}
                  </Typography>

                  <Typography>
                    Price: {formatCurrencyEN(Number(data?.price) || 0)}
                  </Typography>

                  <Box>
                    <Typography gutterBottom>Quantity</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <TextField
                        type="number"
                        size="small"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        inputProps={{ min: 1 }}
                        sx={{ width: 100 }}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddToCart}
                        sx={{ minWidth: 150 }}
                      >
                        Add to Cart
                      </Button>
                    </Stack>
                  </Box>

                  <Divider />

                  <Typography paragraph sx={{ whiteSpace: 'pre-wrap' }}>
                    {data?.description}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Container>
      )}
    </MainLayout>
  )
}
