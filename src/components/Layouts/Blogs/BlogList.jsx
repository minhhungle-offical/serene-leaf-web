import { PostCard } from '@/components/Common/PostCard'
import { Box, Stack, Typography } from '@mui/material'

export function BlogList({ blogList = [], onCardClick, isLoading }) {
  if (isLoading) {
    return (
      <Box>
        <Typography>Loading ...</Typography>
      </Box>
    )
  }

  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -1.5 }}>
      {blogList?.map((item, idx) => (
        <Box
          width={{ xs: '100%', sm: 1 / 2 }}
          key={idx}
          onClick={() => onCardClick?.(item)}
          sx={{ height: 'auto' }}
        >
          <Box sx={{ p: 1.5, height: '100%' }}>
            <PostCard
              author={item.author.name}
              title={item.title}
              imageUrl={item.image.url}
              createdAt={item.createdAt}
              shortDescription={item.shortDescription}
              category={item.category.name}
            />
          </Box>
        </Box>
      ))}
    </Stack>
  )
}
