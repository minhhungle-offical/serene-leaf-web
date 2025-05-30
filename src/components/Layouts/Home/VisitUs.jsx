import { Box, Button, Container, Stack, Typography } from '@mui/material'
import visit_1 from '@/assets/images/visit-1.jpg'
import visit_2 from '@/assets/images/visit-2.jpg'

export function VisitUs({ onContactClick }) {
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -3 }}>
          <Box sx={{ width: { xs: '100%', md: 1 / 2 }, height: 'auto' }}>
            <Box sx={{ p: 3, height: '100%' }}>
              <Stack justifyContent="center" height="100%">
                <Typography
                  variant="h5"
                  fontWeight={400}
                  color="primary"
                  gutterBottom
                >
                  Visit Us
                </Typography>

                <Typography variant="h4" fontWeight={600} gutterBottom>
                  Visit Our Green Tea Cafe Right on Our Plantation!
                </Typography>

                <Typography>
                  Visit Our Green Tea Cafe Right on Our Plantation!
                </Typography>

                <Typography sx={{ mb: 3 }}>
                  123 Ipsum Street, Consectetur Adipiscing, Ipsum City, Dolor
                  State, 56789 (123) 456 - 7891
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Box onClick={() => onContactClick?.()}>
                    <Button variant="contained">Contact Us</Button>
                  </Box>

                  <Box component="a" href="https://www.google.com/maps">
                    <Button variant="outlined">Open Google Map</Button>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
            <Box sx={{ p: 3 }}>
              <Stack direction="row" sx={{ ml: -2 }}>
                <Box
                  component="img"
                  src={visit_1.src}
                  alt="visit1"
                  sx={{ width: 1 / 2, mb: 15, ml: 2 }}
                />
                <Box
                  component="img"
                  src={visit_2.src}
                  alt="visit2"
                  sx={{ width: 1 / 2, mt: 15, ml: -2 }}
                />
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
