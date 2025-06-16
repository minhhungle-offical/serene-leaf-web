import { Box, Stack, Typography } from '@mui/material'
import AboutStory from '@/assets/images/AboutStory.jpg'

export function OurStory() {
  return (
    <Stack direction="row" flexWrap="wrap">
      {/* IMAGE SIDE */}
      <Box width={{ xs: '100%', md: 1 / 2 }}>
        <Box
          sx={{
            transform: 'translateY(-80px)',
            minHeight: 400,

            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            width="100%"
            height="100%"
            loading="lazy"
            src={AboutStory.src}
            alt="about"
            sx={{ verticalAlign: 'middle', objectFit: 'cover', boxShadow: 3 }}
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </Box>
      </Box>

      {/* CONTENT SIDE */}
      <Box width={{ xs: '100%', md: 1 / 2 }} sx={{ height: 'auto' }}>
        <Stack
          justifyContent="center"
          sx={{
            px: { md: 8 },
            py: { xs: 8, md: 15 },
            height: '100%',
            maxWidth: 680,
          }}
          spacing={3}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Typography
            variant="h5"
            fontWeight={400}
            color="primary"
            component="h2"
            gutterBottom
          >
            Our Story
          </Typography>

          <Typography variant="h4" fontWeight={600} component="h3" gutterBottom>
            Growing Our Passion: From Farming to Crafting Fine Tea
          </Typography>

          <Typography color="text.secondary">
            Serene Leaf began with a small hillside tea farm, where our family
            cultivated green tea using time-honored techniques and deep respect
            for nature. What started as a humble tradition soon became a
            lifelong passion.
          </Typography>

          <Typography color="text.secondary">
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
