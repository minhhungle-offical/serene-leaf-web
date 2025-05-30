import { Box, Container, Typography } from '@mui/material'
import { Title } from '@/components/Common/Title'
import { enqueueSnackbar } from 'notistack'
import { useState } from 'react'
import { ContactForm } from '@/components/Layouts/Contact/ContactForm'
import { ContactList } from '@/components/Layouts/Contact/ContactList'
import { useContacts } from '@/hooks/useContact'
import { VisitUs } from '@/components/Layouts/Contact/VisitUs'
import { MainLayout } from '@/components/Layouts/MainLayout'

export default function FindUs() {
  const [loading, setLoading] = useState(false)
  const { addContact } = useContacts()

  async function handleSubmit(formValues) {
    setLoading(true)
    addContact
      .mutateAsync(formValues)
      .then((res) => {
        enqueueSnackbar('Thank you! Your submission has been received!', {
          variant: 'success',
        })
      })
      .catch((error) => {
        console.log(error)
        enqueueSnackbar(error.message, { variant: 'error' })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <MainLayout>
      <Container>
        <Box sx={{ my: 10 }}>
          <Title
            pageName="Find Us"
            title="Get in Touch - Reserve a Table"
            subtitle="Cras dapibus varius sapien ac efficitur. Fusce tempus tellus quis
            laoreet volutpat. Pellentesque vehicula pellentesque nulla at."
          />
        </Box>

        <Box sx={{ my: 10 }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: 2 / 3 },
              mx: 'auto',
              mb: -20,
              p: 3,

              borderRadius: '8px',
              bgcolor: 'white',
              zIndex: 1,
              boxShadow: (theme) => theme.shadows[24],
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              color="primary"
              gutterBottom
            >
              Contact Us
            </Typography>

            <ContactForm onSubmit={handleSubmit} loading={loading} />
          </Box>
        </Box>
      </Container>

      <Box>
        <VisitUs />
      </Box>

      <Box>
        <ContactList />
      </Box>
    </MainLayout>
  )
}
