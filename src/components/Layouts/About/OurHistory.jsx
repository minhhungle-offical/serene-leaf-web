import { ourHistoryList } from '@/data/ourHistoryList'
import { Box, Stack, Typography } from '@mui/material'
import leaf from '@/assets/images/leaf.svg'

export function OurHistory() {
  return (
    <Stack direction="row" flexWrap="wrap" sx={{ mx: -3 }}>
      {ourHistoryList.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: '100%', sm: 1 / 2 } }}>
          <Box sx={{ p: 3 }}>
            <Stack alignItems="center" sx={{ textAlign: 'center' }} spacing={2}>
              <Typography variant="h5" fontWeight={600} color="primary">
                {item.year}
              </Typography>

              <Box component="img" width={1 / 5} alt="leaf" src={leaf.src} />

              <Typography variant="h5">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </Stack>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}
