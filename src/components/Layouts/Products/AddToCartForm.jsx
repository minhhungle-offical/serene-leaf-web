import { NumberField } from '@/components/FormFields/NumberField'
import { Box, Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'

export function AddToCartForm({ loading, onSubmit, max }) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      quantity: 1,
    },
  })

  const handleFormSubmit = handleSubmit((formValues) => {
    console.log('formValues', formValues)
    onSubmit?.(formValues.quantity)
  })

  return (
    <Stack
      component="form"
      direction="row"
      spacing={2}
      alignItems="flex-start"
      noValidate
      onSubmit={handleFormSubmit}
    >
      <Box maxWidth={200}>
        <NumberField control={control} name="quantity" size="small" max={max} />
      </Box>
      <Box sx={{ pb: 4 }}>
        <Button
          type="submit"
          variant="contained"
          loading={loading}
          disabled={loading}
          sx={{ minWidth: 150, height: 47 }}
        >
          {loading ? 'Adding...' : 'Add to cart'}
        </Button>
      </Box>
    </Stack>
  )
}
