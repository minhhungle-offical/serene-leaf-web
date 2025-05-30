import { Box, Button, Container, Stack, Typography } from '@mui/material'
import banner from '@/assets/images/hero-banner.svg'
import tea from '@/assets/images/tea.png'

export function Hero({ onViewProducts, onVisitOurStore }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        backgroundPosition: '50% 100%',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto',
        bgcolor: 'grey.300',
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ py: { xs: 3, md: 10 }, mx: { sm: -5 } }}
          flexWrap="wrap"
        >
          <Box width={{ xs: '100%', md: 4 / 7 }}>
            <Box sx={{ p: { sm: 5 } }}>
              <Typography
                variant="h3"
                component="h1"
                fontWeight={700}
                marginBottom={3}
              >
                Indulge in the{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Natural and Authentic
                </Box>{' '}
                Flavor of Our Green Tea
              </Typography>

              <Typography variant="h5" marginBottom={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae aliquet justo, vitae lacinia lacus.
              </Typography>

              <Stack
                direction="row"
                flexWrap="wrap"
                sx={{
                  width: { sm: '60%', md: '70%' },
                  mx: -1,
                  '& button': { textTransform: 'none' },
                }}
              >
                <Box width={{ xs: '100%', sm: 1 / 2 }}>
                  <Box sx={{ p: 1 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      onClick={() => onViewProducts?.()}
                    >
                      View Products
                    </Button>
                  </Box>
                </Box>

                <Box width={{ xs: '100%', sm: 1 / 2 }}>
                  <Box sx={{ p: 1 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      size="large"
                      onClick={() => onVisitOurStore?.()}
                    >
                      Visit Our Store
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>

          <Box
            width={{ xs: '100%', md: 3 / 7 }}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <Box sx={{ px: { sm: 5 }, py: 5 }}>
              <Box component="img" alt="tea" src={tea.src} width="100%" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
