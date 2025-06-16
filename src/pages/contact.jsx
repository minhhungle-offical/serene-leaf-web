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
      .then(() => {
        enqueueSnackbar('Thank you! Your submission has been received!', {
          variant: 'success',
        })
      })
      .catch((error) => {
        console.log(error)
        enqueueSnackbar(error.message || 'Submission failed', {
          variant: 'error',
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <MainLayout>
      <Container>
        {/* Title Section */}
        <Box sx={{ my: 10 }} data-aos="fade-up">
          <Title
            pageName="Find Us"
            title="Get in Touch - Reserve a Table"
            subtitle="Cras dapibus varius sapien ac efficitur. Fusce tempus tellus quis laoreet volutpat. Pellentesque vehicula pellentesque nulla at."
          />
        </Box>

        {/* Contact Form */}
        <Box sx={{ my: 10 }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: 2 / 3 },
              mx: 'auto',
              mb: { xs: -12, sm: -16, md: -20 },
              p: { xs: 3, sm: 5 },
              borderRadius: 3,
              bgcolor: 'white',
              zIndex: 2,
              boxShadow: (theme) => theme.shadows[24],
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Typography
              variant="h5"
              textAlign="center"
              color="primary"
              gutterBottom
            >
              Contact Us
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              We'd love to hear from you! Fill in the form and we’ll get back to
              you shortly.
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
