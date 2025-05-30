import { Box, Button, Container, Stack, Typography } from '@mui/material'
import visit from '@/assets/images/FindUs.jpg'

export function VisitUs() {
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
          src={visit.src}
          sx={{ verticalAlign: 'middle' }}
        />
      </Box>

      <Box sx={{ py: 10 }}>
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
                    Visit Our Cafe & Plantation
                  </Typography>

                  <Typography color="primary">Address</Typography>

                  <Typography sx={{ mb: 3 }}>
                    123 Ipsum Street, Consectetur Adipiscing, Ipsum City, Dolor
                    State, 56789
                  </Typography>

                  <Typography color="primary">Contact</Typography>

                  <Typography sx={{ mb: 3 }}>
                    (123) 456 - 7891
                    <br />
                    contact@example.com
                  </Typography>

                  <Typography color="primary">Contact</Typography>

                  <Typography sx={{ mb: 3 }}>
                    Weekdays –– 10:00-19:00
                    <br />
                    Weekends –– 09:00-19:00
                  </Typography>

                  <Box component="a" href="https://www.google.com/maps">
                    <Button variant="outlined">Open Google Map</Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
