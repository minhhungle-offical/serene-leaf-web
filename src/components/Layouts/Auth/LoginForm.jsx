import { InputField } from '@/components/FormFields/InputField'
import { PasswordField } from '@/components/FormFields/PasswordField'
import { Box, Button, Divider, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  email: yup
    .string()
    .email('Email không hợp lệ')
    .required('Vui lòng nhập email'),
  password: yup
    .string()
    .min(6, 'Mật khẩu phải từ 6 ký tự')
    .required('Vui lòng nhập mật khẩu'),
})

export const LoginForm = ({ loading, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = handleSubmit((formValues) => {
    onSubmit?.(formValues)
  })

  return (
    <Stack component="form" noValidate spacing={2} onSubmit={handleFormSubmit}>
      <Box>
        <InputField control={control} name="email" label="Email" />
      </Box>

      <Box>
        <PasswordField control={control} name="password" label="Password" />
      </Box>

      <Box>
        <Divider />
      </Box>

      <Button type="submit" size="large" variant="contained" disabled={loading}>
        Login
      </Button>
    </Stack>
  )
}
