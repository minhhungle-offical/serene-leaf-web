import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'

export let theme = createTheme({
  palette: {
    primary: {
      light: '#69876c',
      main: '#446948',
      dark: '#2f4932',
    },
  },
  typography: {
    fontFamily: 'Alice, sans-serif',
    fontSize: 18,
  },
  components: {
    MuiPopover: {
      defaultProps: {
        disableScrollLock: true, // 💥 Tắt scroll lock = không thêm padding vào body
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true, // 💥 Tương tự
      },
    },
    MuiDialog: {
      defaultProps: {
        disableScrollLock: true, // optional nếu bạn dùng dialog
      },
    },
  },
})
theme = responsiveFontSizes(theme)

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
