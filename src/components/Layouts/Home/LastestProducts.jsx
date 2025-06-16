import { Box, Button, Container, Stack } from '@mui/material'
import { ProductCard } from '@/components/Common/ProductCard'
import { Title } from '@/components/Common/Title'

export function LatestProducts({
  productList = [],
  onViewProducts,
  onCardClick,
}) {
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Title
            pageName="Our Tea"
            title="Discover Our Freshest Green Tea Selection"
            subtitle="Carefully handpicked and crafted, our latest products capture the essence of pure, authentic green tea from nature to cup."
          />

          <Box width="100%">
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{ mx: -1 }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {productList &&
                productList.length > 0 &&
                productList.map((item, idx) => (
                  <Box
                    width={{ xs: '100%', sm: 1 / 2, md: 1 / 4 }}
                    key={idx}
                    onClick={() => onCardClick?.(item)}
                  >
                    <Box sx={{ p: 1 }}>
                      <ProductCard
                        title={item.name}
                        imageUrl={item.image?.url}
                        price={parseInt(item.price)}
                      />
                    </Box>
                  </Box>
                ))}
            </Stack>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              onClick={() => onViewProducts?.()}
            >
              View All Products
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
