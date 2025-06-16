import { Box, Button, Container, Stack } from '@mui/material'
import { PostCard } from '@/components/Common/PostCard'
import { Title } from '@/components/Common/Title'

export function PostList({ postList = [], onViewPost, onCardClick }) {
  return (
    <Box sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10} alignItems="center">
          <Title
            pageName="Blog"
            title="Inspiration, Recipes & Tea Wisdom"
            subtitle="Discover creative ways to enjoy green tea — from delicious recipes to mindful brewing tips that elevate your daily ritual."
          />

          <Box width="100%">
            <Stack
              direction="row"
              flexWrap="wrap"
              sx={{ mx: -1.5 }}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {postList &&
                postList.length &&
                postList.map((item, idx) => (
                  <Box
                    width={{ xs: '100%', sm: 1 / 2 }}
                    key={idx}
                    onClick={() => onCardClick?.(item)}
                    sx={{ height: 'auto' }}
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

          <Box>
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
