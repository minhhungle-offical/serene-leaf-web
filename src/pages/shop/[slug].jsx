import { productApi } from '@/api/productApi'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { formatCurrencyEN } from '@/utils/common'
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

export async function getStaticPaths() {
  try {
    const res = await productApi.getAll()
    const { data } = await res

    const paths = data.map((product) => ({
      params: { slug: product.slug },
    }))

    return {
      paths,
      fallback: 'blocking', // 'blocking' = build trang khi user request
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
      revalidate: 60, // ISR: build lại sau mỗi 60 giây
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default function ProductDetailPage({ product }) {
  // const [quantity, setQuantity] = useState(1)

  return (
    <MainLayout>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5, py: 10 }}>
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <Stack sx={{ p: 1.5 }}>
              <Box
                component="img"
                src={product?.image?.url}
                alt={product?.name}
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
                  <Stack direction="row" spacing={2} alignItems="center">
                    <TextField
                      type="number"
                      size="small"
                      value={1}
                      // onChange={(e) => setQuantity(Number(e.target.value))}
                      inputProps={{ min: 1 }}
                      sx={{ width: 100 }}
                    />
                    <Button variant="contained" sx={{ minWidth: 150 }}>
                      Add to Cart
                    </Button>
                  </Stack>
                </Box>

                <Divider />

                <Typography paragraph sx={{ whiteSpace: 'pre-wrap' }}>
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
