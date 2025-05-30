import { Box, Container, Stack, Typography } from '@mui/material'
import AboutFounder from '@/assets/images/AboutFounder.jpg'

export function OurFounder() {
  return (
    <Box sx={{ position: 'relative', bgcolor: '#f5f1ea' }}>
      <Box
        sx={{
          position: { md: 'absolute' },
          right: 0,
          top: 0,
          width: { md: '50%' },
          height: '100%',
        }}
      >
        <Box
          width="100%"
          height="100%"
          component="img"
          alt="visit"
          src={AboutFounder.src}
          sx={{ verticalAlign: 'middle' }}
        />
      </Box>

      <Box sx={{ py: 7 }}>
        <Container>
          <Stack direction="row" flexWrap="wrap" sx={{ ml: { sm: -8 } }}>
            <Box sx={{ width: { xs: '100%', md: 1 / 2 }, height: 'auto' }}>
              <Box sx={{ p: { sm: 8 }, height: '100%' }}>
                <Stack justifyContent="center" height="100%">
                  <Typography
                    variant="h5"
                    fontWeight={400}
                    color="primary"
                    gutterBottom
                  >
                    Our Founder
                  </Typography>

                  <Typography variant="h4" fontWeight={600} gutterBottom>
                    The Art of Green Tea: A Family Legacy
                  </Typography>

                  <Typography>
                    Nullam malesuada bibendum finibus. Integer interdum
                    malesuada risus a rhoncus. Vivamus tempus quam dapibus,
                    hendrerit nulla vitae, imperdiet leo. Vestibulum consequat
                    nulla nec neque sodales interdum.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
