import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Stack, Typography, Box } from '@mui/material'
import { toast } from 'react-toastify'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { authApi } from '@/api/authApi'
import { LoginForm } from '@/components/Layouts/Auth/LoginForm'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (formValues) => {
    setLoading(true)
    try {
      console.log('Logging in with:', formValues)

      await authApi.login(formValues)

      toast.success('Login successful')
      router.push('/') // Redirect to homepage or dashboard
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
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}
