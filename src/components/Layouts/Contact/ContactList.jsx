import { contactList } from '@/data/contactList'
import { Box, Container, Stack, Typography } from '@mui/material'
import { PostCard } from '@/components/Common/PostCard'

export function ContactList({ onCardClick }) {
  return (
    <Box width="100%" sx={{ py: { xs: 8, md: 15 }, bgcolor: '#f9f9f9' }}>
      <Container>
        <Stack spacing={10}>
          <Box data-aos="fade-up">
            <Box textAlign="center" maxWidth={650} sx={{ mx: 'auto' }}>
              <Typography
                variant="h5"
                fontWeight={400}
                color="primary"
                gutterBottom
              >
                Our Store
              </Typography>

              <Typography variant="h4" fontWeight={600} gutterBottom>
                Find a Store Near You
              </Typography>
            </Box>
          </Box>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            sx={{ mx: -1.5 }}
          >
            {contactList.map((item, idx) => (
              <Box
                key={idx}
                data-aos="fade-up"
                sx={{
                  width: {
                    xs: '100%',
                    sm: '50%',
                  },
                  p: 1.5,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                  cursor: 'pointer',
                }}
                onClick={() => onCardClick?.(item)}
              >
                <PostCard
                  title={item.title}
                  imageUrl={item.imageUrl}
                  shortDescription={item.shortDescription}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
