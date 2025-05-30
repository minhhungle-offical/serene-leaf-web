import { Box, Typography } from '@mui/material'



export function Title({ pageName, title, subtitle }) {
  return (
    <Box textAlign="center" maxWidth={700} sx={{ mx: 'auto' }}>
      <Typography variant="h5" fontWeight={400} color="primary" gutterBottom>
        {pageName}
      </Typography>

      <Typography variant="h4" fontWeight={600} gutterBottom>
        {title}
      </Typography>

      <Typography>{subtitle}</Typography>
    </Box>
  )
}
