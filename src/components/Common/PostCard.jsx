import { Box, Button, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'

export function PostCard({
  title,
  imageUrl,
  shortDescription,
  author,
  createdAt,
  category,
}) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <Box
        component="img"
        alt="img"
        width="100%"
        src={imageUrl}
        sx={{ aspectRatio: '16/9' }}
      />

      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <Typography fontWeight={600} color="grey">
            {author && 'By ' + author}
            {createdAt && ' - ' + dayjs(createdAt).format('MMM DD, YYYY')}
          </Typography>

          <Button size="small" disabled variant="outlined">
            {category}
          </Button>
        </Stack>

        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Typography>{shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
