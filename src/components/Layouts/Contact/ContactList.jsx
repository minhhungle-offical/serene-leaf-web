import { contactList } from '@/data/contactList'
import { Box, Container, Stack, Typography } from '@mui/material'
import { PostCard } from '@/components/Common/PostCard'

export function ContactList({ onCardClick }) {
  return (
    <Box width="100%" sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10}>
          <Box>
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

          <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
            {contactList.map((item, idx) => (
              <Box
                width={{ xs: '100%', sm: 1 / 2 }}
                key={idx}
                onClick={() => onCardClick?.(item)}
                sx={{ height: 'auto' }}
              >
                <Box sx={{ p: 1.5, height: '100%' }}>
                  <PostCard
                    title={item.title}
                    imageUrl={item.imageUrl}
                    shortDescription={item.shortDescription}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
