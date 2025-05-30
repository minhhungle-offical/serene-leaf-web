import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Stack } from '@mui/material'
import { InputField } from '@/components/FormFields/InputField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Please enter a name'),
  email: yup.string().email().required('Please enter your email address'),
  phone: yup.string().required('Please enter your phone number'),
})

export function ContactForm({ loading, onSubmit }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },

    resolver: yupResolver(schema),
  })

  const handleFormSubmit = handleSubmit((formValues) => {
    onSubmit?.(formValues)
    reset()
  })

  return (
    <Stack component="form" noValidate onSubmit={handleFormSubmit} spacing={2}>
      <Box>
        <InputField name="name" control={control} label="Name" />

        <InputField name="email" control={control} label="Email" />

        <InputField name="phone" control={control} label="Phone" />

        <InputField
          sx={{ whiteSpace: 'pre-wrap' }}
          rows={5}
          multiline
          name="description"
          control={control}
          label="Description"
        />
      </Box>

      <Box>
        <Button type="submit" disabled={loading} variant="contained">
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </Box>
    </Stack>
  )
}
