import { cartApi } from '@/api/cartApi'
import { productApi } from '@/api/productApi'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { AddToCartForm } from '@/components/Layouts/Products/AddToCartForm'
import { useAuth } from '@/contexts/AuthContext'
import { useCart } from '@/contexts/CartContext'
import { formatCurrencyEN, isBrowser } from '@/utils/common'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-toastify'

export async function getStaticPaths() {
  try {
    const res = await productApi.getAll()
    const { data } = await res

    const paths = data.map((product) => ({
      params: { slug: product.slug },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    return { paths: [], fallback: 'blocking' }
  }
}

export async function getStaticProps({ params }) {
  try {
    const product = await productApi.getBySlug(params.slug)

    if (!product) {
      return { notFound: true }
    }

    return {
      props: { product },
      revalidate: 60,
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default function ProductDetailPage({ product }) {
  const [loading, setLoading] = useState(false)
  const { token } = useAuth()
  const router = useRouter()

  const { fetchCartTotal } = useCart()

  const handleAddToCart = async (quantity) => {
    if (!token) {
      router.push({
        pathname: '/auth/login',
        query: { redirect: router.asPath },
      })
      return
    }

    if (!product || quantity === 0) return

    try {
      setLoading(true)

      await cartApi.addToCart({
        productId: product._id,
        quantity,
      })

      await fetchCartTotal()

      toast.success('Product added to cart!')
    } catch (error) {
      console.error('Add to cart failed:', error)
      toast.error('Failed to add to cart. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5, py: 10 }}>
          {/* IMAGE */}
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <Stack sx={{ p: 1.5 }}>
              <Box
                component="img"
                src={product?.image?.url}
                alt={product?.name}
                loading="lazy"
                boxShadow={3}
                data-aos="zoom-in"
                data-aos-duration="1000"
                sx={{ position: 'sticky', top: 40, width: '100%' }}
              />
            </Stack>
          </Box>

          {/* PRODUCT INFO */}
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <Box sx={{ p: 1.5 }} data-aos="fade-left" data-aos-duration="1000">
              <Stack spacing={3}>
                <Typography variant="h4" fontWeight={600}>
                  {product?.name}
                </Typography>

                <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                  {product?.shortDescription}
                </Typography>

                <Typography>
                  Price: {formatCurrencyEN(Number(product?.price) || 0)}
                </Typography>

                <Box>
                  <Typography gutterBottom>Quantity</Typography>
                  <AddToCartForm
                    loading={loading}
                    max={product?.quantity || 0}
                    onSubmit={handleAddToCart}
                  />
                </Box>

                <Divider />

                <Typography
                  paragraph
                  sx={{ whiteSpace: 'pre-wrap' }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {product?.description}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}
