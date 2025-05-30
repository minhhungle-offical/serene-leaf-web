import { Box, Rating, Stack, Typography } from '@mui/material'
import { Title } from '@/components/Common/Title'

const reviewList = [
  `“This green tea is simply amazing. The leaves are of the highest quality, and the tea has a rich flavor that is both relaxing and invigorating.”`,
  `“If you're a green tea lover, you must try this one. It's one of the best I've tasted, with a perfect balance of flavors and a smooth finish.”`,
  `“I've tried many green teas before, but this one is something special. The taste is smooth and refined, with a subtle sweetness that is simply delightful.”`,
  `“The green tea from this plantation is simply outstanding! I have tried many green teas before, but this one stands out with its unique flavor and aroma. Highly recommend!"`,
]

export function Review() {
  return (
    <Box>
      <Box sx={{ my: 10 }}>
        <Title pageName="Reviews" title="What Our Customers Say" />
      </Box>

      <Stack sx={{ my: 10 }} direction="row" flexWrap="wrap">
        {reviewList.map((item, idx) => (
          <Box
            key={idx}
            sx={{ width: { xs: '100%', sm: 1 / 2 }, height: 'auto' }}
          >
            <Box sx={{ p: 3, height: '100%' }}>
              <Box
                sx={{
                  p: 3,
                  border: `1px solid`,
                  borderColor: 'grey.300',
                  height: '100%',
                }}
              >
                {' '}
                <Rating name="read-only" value={5} readOnly />
                <Typography variant="h6" color="primary">
                  {item}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
