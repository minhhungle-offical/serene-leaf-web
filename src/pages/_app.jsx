import { PageLoading } from '@/components/Common/LoadingPage'
import { CartProvider } from '@/contexts/CartContext'
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SnackbarProvider } from 'notistack'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
        disableScrollLock: true,
      },
    },
    MuiMenu: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiDialog: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
})
theme = responsiveFontSizes(theme)

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <PageLoading />
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="colored" // hoặc "light" | "dark"
          />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
