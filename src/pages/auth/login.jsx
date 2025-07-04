import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Stack, Typography, Box } from '@mui/material'
import { toast } from 'react-toastify'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { authApi } from '@/api/authApi'
import { LoginForm } from '@/components/Layouts/Auth/LoginForm'
import Link from 'next/link'
import { isBrowser } from '@/utils/common'
import { useAuth } from '@/contexts/AuthContext' // ✅ dùng context

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { login } = useAuth() // ✅ lấy login() từ context
  const { redirect } = router.query

  const handleLogin = async (formValues) => {
    if (!isBrowser) return
    setLoading(true)
    try {
      const data = await authApi.login(formValues)

      const token = data.token
      const user = data.user
      login(token, user)

      if (redirect) {
        router.push(redirect)
      } else if (window.history.length > 2) {
        router.back()
      } else {
        router.push('/')
      }
    } catch (error) {
      console.error('Login failed:', error)
      toast.error(error?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Stack
          spacing={3}
          sx={{ py: 8 }}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: '100%', p: { xs: 2, sm: 3 }, boxShadow: 4 }}>
            <Typography variant="h4" align="center">
              Login
            </Typography>

            <Box>
              <LoginForm loading={loading} onSubmit={handleLogin} />
            </Box>
            <Typography align="center" sx={{ mt: 2 }}>
              Don’t have an account?{' '}
              <Link
                href={{
                  pathname: '/auth/sign-up',
                  query: { redirect: router.query.redirect || '/' },
                }}
                style={{ fontWeight: 600 }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}
