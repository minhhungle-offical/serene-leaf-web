import { InputField } from '@/components/FormFields/InputField'
import { PasswordField } from '@/components/FormFields/PasswordField'
import { Box, Button, Divider, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Yup validation schema theo đúng schema Mongoose
const schema = yup.object({
  name: yup.string().trim().max(100, 'Tên không được vượt quá 100 ký tự'),
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không hợp lệ'),
  address: yup
    .string()
    .trim()
    .max(200, 'Địa chỉ không được vượt quá 200 ký tự'),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{7,15}$/, 'Số điện thoại không hợp lệ')
    .nullable()
    .transform((value) => (value === '' ? null : value)),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
    .min(6, 'Mật khẩu phải ít nhất 6 ký tự'),
  confirmPassword: yup
    .string()
    .required('Vui lòng xác nhận mật khẩu')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp'),
})

export const SignUpForm = ({ loading, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  })

  const handleFormSubmit = handleSubmit((formValues) => {
    onSubmit?.(formValues)
  })

  return (
    <Stack component="form" noValidate spacing={2} onSubmit={handleFormSubmit}>
      <Box>
        <InputField control={control} name="name" label="Full Name" />
      </Box>

      <Box>
        <InputField control={control} name="email" label="Email" />
      </Box>

      <Box>
        <InputField control={control} name="address" label="Address" />
      </Box>

      <Box>
        <InputField control={control} name="phoneNumber" label="Phone Number" />
      </Box>

      <Box>
        <PasswordField control={control} name="password" label="Password" />
      </Box>

      <Box>
        <PasswordField
          control={control}
          name="confirmPassword"
          label="Confirm Password"
        />
      </Box>

      <Box py={1}>
        <Divider />
      </Box>

      <Button type="submit" size="large" variant="contained" disabled={loading}>
        Sign Up
      </Button>
    </Stack>
  )
}
