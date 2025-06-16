import { Box, Button, Container, Stack } from '@mui/material'
import { PostCard } from '@/components/Common/PostCard'
import { Title } from '@/components/Common/Title'

export function PostList({ postList = [], onViewPost, onCardClick }) {
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box data-aos="fade-up" data-aos-duration="1000">
            <Title
              pageName="Blog"
              title="Inspiration, Recipes & Tea Wisdom"
              subtitle="Discover creative ways to enjoy green tea — from delicious recipes to mindful brewing tips that elevate your daily ritual."
            />
          </Box>

          <Box width="100%">
            <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
              {postList &&
                postList.length &&
                postList.map((item, idx) => (
                  <Box
                    width={{ xs: '100%', sm: 1 / 2 }}
                    key={idx}
                    onClick={() => onCardClick?.(item)}
                    sx={{ height: 'auto' }}
                    data-aos="fade-up"
                    data-aos-delay={idx * 200}
                    data-aos-duration="800"
                  >
                    <Box sx={{ p: 1.5, height: '100%' }}>
                      <PostCard
                        title={item.title}
                        imageUrl={item.image?.url}
                        shortDescription={item.shortDescription}
                        author={item.author.name}
                        category={item.category.name}
                        createdAt={item.createdAt}
                      />
                    </Box>
                  </Box>
                ))}
            </Stack>
          </Box>

          <Box data-aos="fade-up" data-aos-delay="400">
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              onClick={() => onViewPost?.()}
            >
              View All Post
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
