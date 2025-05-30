import { Box, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { InputField } from '../FormFields/InputField'

export function Subscribe({ isLoading, onSubscribe }) {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
    },
  })

  const handleFormSubmit = handleSubmit((formValues) => {
    onSubscribe?.(formValues)
    reset()
  })

  return (
    <Stack
      direction="row"
      alignItems="center"
      component="form"
      onSubmit={handleFormSubmit}
      noValidate
    >
      <Box>
        <InputField
          name="email"
          placeholder="Enter your email..."
          control={control}
          sx={{
            '.MuiInputBase-root': {
              height: 50,
            },
          }}
        />
      </Box>

      <Box ml={2}>
        <Button
          variant="contained"
          disabled={isLoading}
          type="submit"
          sx={{ height: 50 }}
        >
          {isLoading ? 'Loading...' : 'Subscribe'}
        </Button>
      </Box>
    </Stack>
  )
}
