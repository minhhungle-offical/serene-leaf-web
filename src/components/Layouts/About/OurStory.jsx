import { Box, Stack, Typography } from '@mui/material'
import AboutStory from '@/assets/images/AboutStory.jpg'

export function OurStory() {
  return (
    <Stack direction="row" flexWrap="wrap">
      <Box
        width={{
          xs: '100%',
          md: 1 / 2,
        }}
      >
        <Box
          sx={{
            transform: 'translateY(-80px)',
          }}
        >
          <Box
            component="img"
            width="100%"
            height="100%"
            loading="lazy"
            src={AboutStory.src}
            alt="about"
            sx={{ verticalAlign: 'middle', objectFit: 'cover' }}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </Box>
      </Box>

      <Box width={{ xs: '100%', md: 1 / 2 }} sx={{ height: 'auto' }}>
        <Stack
          justifyContent="center"
          sx={{
            px: { md: 8 },
            py: 15,
            height: '100%',
            maxWidth: 680,
          }}
        >
          <Typography variant="h5" fontWeight={400} gutterBottom>
            Our Story
          </Typography>

          <Typography variant="h4" fontWeight={600} gutterBottom>
            Growing Our Passion: From Farming to Crafting Fine Tea
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Serene Leaf began with a small hillside tea farm, where our family
            cultivated green tea using time-honored techniques and deep respect
            for nature. What started as a humble tradition soon became a
            lifelong passion.
          </Typography>

          <Typography sx={{ mb: 3 }}>
            Over the years, we’ve blended generations of farming knowledge with
            a commitment to sustainability and quality. Today, every leaf we
            produce reflects that journey — from the soil of our farm to your
            cup.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
}
