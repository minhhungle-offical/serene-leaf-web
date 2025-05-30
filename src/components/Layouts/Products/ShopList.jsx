import { Box, Stack, Typography } from '@mui/material'
import { ProductCard } from '@/components/Common/ProductCard'

export function ShopList({ productList = [], onCardClick, isLoading }) {
  if (isLoading) {
    return (
      <Box>
        <Typography>Loading ...</Typography>
      </Box>
    )
  }

  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {Array.isArray(productList) &&
        productList.length > 0 &&
        productList?.map((item, idx) => (
          <Box
            width={{ xs: '100%', sm: 1 / 2, md: 1 / 3 }}
            key={idx}
            onClick={() => onCardClick?.(item)}
          >
            <Box sx={{ p: 1.5 }}>
              <ProductCard
                title={item.name}
                imageUrl={item.image.url}
                price={parseInt(item.price)}
              />
            </Box>
          </Box>
        ))}
    </Stack>
  )
}
