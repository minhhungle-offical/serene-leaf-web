import { Title } from '@/components/Common/Title'
import { WhyUsCard } from '@/components/Common/WhyUsCard'
import { whyUsList } from '@/data/whyUsList'
import { Box, Button, Container, Stack } from '@mui/material'

export function WhyUs({ onViewProducts }) {
  return (
    <Box sx={{ bgcolor: '#f5f1ea', py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Title
            pageName="Why Serene Leaf"
            title="Why Choose Serene Leaf?"
            subtitle="From farm to cup, we bring you premium green tea crafted with care, tradition, and a deep respect for nature."
          />

          <Box data-aos="fade-up" data-aos-duration="1000">
            <Stack direction="row" flexWrap="wrap" sx={{ mx: -1 }}>
              {whyUsList?.map((item, idx) => (
                <Box width={{ xs: '100%', sm: 1 / 2, md: 1 / 3 }} key={idx}>
                  <Box sx={{ px: 1 }}>
                    <WhyUsCard
                      title={item.title}
                      imageUrl={item.imageUrl}
                      description={item.description}
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              onClick={() => onViewProducts?.()}
            >
              View Products
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
