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
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <Box
          component="img"
          width="100%"
          height="100%"
          alt="visit"
          src={visit.src}
          sx={{ objectFit: 'cover', verticalAlign: 'middle' }}
        />
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Stack direction="row" flexWrap="wrap" sx={{ mx: -3 }}>
            <Box
              sx={{
                width: { xs: '100%', md: 1 / 2 },
                px: { xs: 2, sm: 3 },
                py: { xs: 4, sm: 6 },
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Stack spacing={2}>
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

                <Box>
                  <Typography color="primary" fontWeight={500}>
                    Address
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    123 Ipsum Street, Consectetur Adipiscing, Ipsum City, Dolor
                    State, 56789
                  </Typography>
                </Box>

                <Box>
                  <Typography color="primary" fontWeight={500}>
                    Contact
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    (123) 456 - 7891
                    <br />
                    contact@example.com
                  </Typography>
                </Box>

                <Box>
                  <Typography color="primary" fontWeight={500}>
                    Opening Hours
                  </Typography>
                  <Typography sx={{ mb: 3 }}>
                    Weekdays –– 10:00 - 19:00
                    <br />
                    Weekends –– 09:00 - 19:00
                  </Typography>
                </Box>

                <Box
                  component="a"
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener"
                >
                  <Button variant="outlined" size="large">
                    Open Google Map
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
