import logo from '@/assets/logo.svg'
import { Box, Stack, Typography } from '@mui/material'

export function Loading() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'white',
        zIndex: 9999,
      }}
    >
      <Box>
        <Box component="img" src={logo.src} alt="Logo" width={200} />
      </Box>

      <Typography mt={2} fontSize={20} fontWeight="bold">
        Loading
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            ml: 0.5,
            width: 20,
            textAlign: 'left',
          }}
        >
          <Box
            component="span"
            sx={{
              animation: 'blinkDot 1.4s infinite',
              animationDelay: '0s',
              display: 'inline-block',
            }}
          >
            .
          </Box>
          <Box
            component="span"
            sx={{
              animation: 'blinkDot 1.4s infinite',
              animationDelay: '0.2s',
              display: 'inline-block',
            }}
          >
            .
          </Box>
          <Box
            component="span"
            sx={{
              animation: 'blinkDot 1.4s infinite',
              animationDelay: '0.4s',
              display: 'inline-block',
            }}
          >
            .
          </Box>
        </Box>
      </Typography>

      {/* CSS keyframes nội bộ */}
      <style jsx global>{`
        @keyframes blinkDot {
          0%,
          80%,
          100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </Stack>
  )
}
