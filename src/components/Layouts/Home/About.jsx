import { Box, Button, Stack, Typography } from '@mui/material'
import about from '@/assets/images/home-about.jpg'

export function About() {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ bgcolor: 'primary.main' }}>
      <Box
        width={{
          xs: '100%',
          md: 1 / 2,
        }}
      >
        <Box
          component="img"
          width="100%"
          height="100%"
          loading="lazy"
          src={about.src}
          alt="about"
          sx={{ verticalAlign: 'middle', objectFit: 'cover' }}
        />
      </Box>

      <Box width={{ xs: '100%', md: 1 / 2 }} sx={{ height: 'auto' }}>
        <Stack
          justifyContent="center"
          sx={{
            px: { xs: 2, sm: 8 },
            py: 8,
            color: 'white',
            height: '100%',
            maxWidth: 680,
          }}
        >
          <Typography variant="h5" fontWeight={400} gutterBottom>
            About us
          </Typography>

          <Typography variant="h4" fontWeight={600} gutterBottom>
            Unfolding the History and Heritage of Our Green Tea
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Sed non sem lobortis ligula facilisis accumsan ut nec justo. Integer
            a elit augue. Quisque varius facilisis risus, eget tristique tortor
            lacinia a.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Fusce ultrices purus id quam tincidunt, sit amet blandit mauris
            maximus. Aliquam dictum lorem consectetur tortor viverra, in posuere
            metus sodales.
          </Typography>

          <Box>
            <Button
              variant="contained"
              color="inherit"
              sx={{ color: 'primary.main', textTransform: 'none' }}
            >
              Learn more
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
