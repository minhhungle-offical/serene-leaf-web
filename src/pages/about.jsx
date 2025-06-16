import { Box, Container, Stack } from '@mui/material'
import { Title } from '@/components/Common/Title'
import aboutBanner from '@/assets/images/AboutHero1.png'
import { OurHistory } from '@/components/Layouts/About/OurHistory'
import { OurStory } from '@/components/Layouts/About/OurStory'
import { OurFounder } from '@/components/Layouts/About/OurFounder'
import { Review } from '@/components/Layouts/About/Review'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function About() {
  return (
    <MainLayout>
      <Container>
        <Stack
          sx={{ my: 10 }}
          spacing={10}
          alignItems="center"
          textAlign="center"
        >
          <Box maxWidth="800px" data-aos="fade-up" data-aos-duration="1000">
            <Title
              pageName="About Serene Leaf"
              title="Our Passion for Green Tea: A Tradition of Excellence"
              subtitle="From our hillside farms to your cup, Serene Leaf is built on generations of care, craftsmanship, and a deep respect for the art of tea making."
            />
          </Box>

          <Box
            data-aos="zoom-in"
            data-aos-duration="1000"
            component="img"
            width="100%"
            maxWidth="1000px"
            boxShadow={4}
            alt="about-banner"
            src={aboutBanner.src}
          />
        </Stack>
      </Container>

      <Box sx={{ py: 15, bgcolor: '#f5f1ea' }}>
        <Container>
          <Stack spacing={10}>
            <Box data-aos="fade-up" data-aos-duration="1000">
              <Title
                pageName="Our History"
                title="Our Green Tea Plantation Journey"
                subtitle="Explore how our passion for green tea has grown from humble beginnings to a global presence."
              />
            </Box>

            <OurHistory />
          </Stack>
        </Container>
      </Box>

      <Box>
        <Container>
          <OurStory />
        </Container>
      </Box>

      <Box>
        <OurFounder />
      </Box>

      <Box>
        <Container>
          <Review />
        </Container>
      </Box>
    </MainLayout>
  )
}
