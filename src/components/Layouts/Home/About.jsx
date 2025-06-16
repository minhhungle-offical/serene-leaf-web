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
        data-aos="fade-right"
        data-aos-duration="1000"
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

      <Box
        width={{ xs: '100%', md: 1 / 2 }}
        sx={{ height: 'auto' }}
        data-aos="fade-left"
        data-aos-duration="1000"
      >
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
            About Us
          </Typography>

          <Typography variant="h4" fontWeight={600} gutterBottom>
            A Journey Through Generations of Green Tea Mastery
          </Typography>

          <Typography sx={{ mb: 3 }}>
            At Serene Leaf, our story begins with a passion passed down through
            generations — a love for green tea and the art of cultivating it
            with care, respect, and tradition.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Every leaf is handpicked, and every blend reflects the harmony of
            nature and craftsmanship. Our mission is simple: to bring you a cup
            of tea that calms the soul and energizes the spirit.
          </Typography>

          <Box data-aos="zoom-in" data-aos-delay="300">
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
