import { Box, Stack, Typography } from '@mui/material'

export function WhyUsCard({ title, imageUrl, description }) {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={2}
      textAlign="center"
    >
      <Box width={1 / 3}>
        <Box
          component="img"
          loading="lazy"
          alt="img"
          width="100%"
          src={imageUrl}
          sx={{ aspectRatio: '1/1' }}
        />
      </Box>

      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>
      <Typography fontWeight={400}>{description}</Typography>
    </Stack>
  )
}
