import { Box, Container, Stack, Typography } from '@mui/material'
import AboutFounder from '@/assets/images/AboutFounder.jpg'

export function OurFounder() {
  return (
    <Box sx={{ position: 'relative', bgcolor: '#f5f1ea', overflow: 'hidden' }}>
      <Stack direction="row" flexWrap="wrap">
        {/* CONTENT */}
        <Box sx={{ width: { xs: '100%', md: 1 / 2 }, zIndex: 2 }}>
          <Box sx={{ px: { xs: 4, sm: 8 }, py: { xs: 6, sm: 10 } }}>
            <Stack
              justifyContent="center"
              spacing={3}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Typography
                variant="h5"
                fontWeight={400}
                color="primary"
                component="h2"
              >
                Our Founder
              </Typography>

              <Typography variant="h4" fontWeight={600} component="h3">
                The Art of Green Tea: A Family Legacy
              </Typography>

              <Typography color="text.secondary">
                Serene Leaf was founded by a third-generation tea grower who
                inherited not only his family's hillside farm, but also a deep
                appreciation for the craft of tea making.
                <br />
                <br />
                Guided by tradition and driven by a vision to share pure,
                handcrafted green tea with the world, he turned a local legacy
                into a global journey — rooted in care, quality, and love for
                nature.
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* IMAGE */}
        <Box
          sx={{
            width: { xs: '100%', md: 1 / 2 },
            height: 'auto',
            minHeight: 400,
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={AboutFounder.src}
            alt="founder"
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              verticalAlign: 'middle',
              boxShadow: 3,
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </Box>
      </Stack>
    </Box>
  )
}
