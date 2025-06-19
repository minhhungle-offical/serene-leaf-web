import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Stack, Typography, Box } from '@mui/material'
import { toast } from 'react-toastify'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { authApi } from '@/api/authApi'
import { SignUpForm } from '@/components/Layouts/Auth/SignUpForm'
import Link from 'next/link'
import { isBrowser } from '@/utils/common'

export default function SignUpPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSignUp = async (formValues) => {
    if (!isBrowser) return
    setLoading(true)
    try {
      console.log('Signing up with:', formValues)

      await authApi.register(formValues)

      toast.success('Sign up successful! Redirecting...')
      router.push({
        pathname: '/auth/login',
        query: { redirect: router.query.redirect || '/' },
      })
    } catch (error) {
      console.error('Sign up failed:', error)
      toast.error(error?.response?.data?.message || 'Sign up failed')
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
              Sign Up
            </Typography>

            <Box>
              <SignUpForm loading={loading} onSubmit={handleSignUp} />
            </Box>

            <Typography align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Link
                href={{
                  pathname: '/auth/login',
                  query: { redirect: router.query.redirect || '/' },
                }}
                style={{ fontWeight: 600 }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}
