import { Box, Rating, Stack, Typography } from '@mui/material'
import { Title } from '@/components/Common/Title'

const reviewList = [
  `“Absolutely amazing green tea. Rich flavor, smooth, and very refreshing.”`,
  `“One of the best I’ve ever had — perfectly balanced and incredibly smooth.”`,
  `“Delicate, slightly sweet, and beautifully refined. A must-try for tea lovers!”`,
  `“Exceptional quality and aroma. This tea truly stands out. Highly recommended!”`,
]

export function Review() {
  return (
    <Box>
      <Box sx={{ my: 10 }} data-aos="fade-up" data-aos-duration="1000">
        <Title pageName="Reviews" title="What Our Customers Say" />
      </Box>

      <Stack sx={{ my: 10 }} direction="row" flexWrap="wrap">
        {reviewList.map((item, idx) => (
          <Box
            key={idx}
            sx={{ width: { xs: '100%', sm: 1 / 2 }, height: 'auto' }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={idx * 150} // tạo hiệu ứng xuất hiện lần lượt
          >
            <Box sx={{ p: 3, height: '100%' }}>
              <Box
                sx={{
                  p: 3,
                  border: `1px solid`,
                  borderColor: 'grey.300',
                  height: '100%',
                  borderRadius: 2,
                }}
              >
                <Rating name="read-only" value={5} readOnly />
                <Typography variant="h6" color="primary" mt={2}>
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
