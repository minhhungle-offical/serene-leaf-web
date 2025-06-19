import { Box, TextField, Typography } from '@mui/material'
import { useController } from 'react-hook-form'

export function NumberField({
  label,
  control,
  name,
  placeholder,
  onFieldChange,
  min,
  max,
  ...props
}) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: 'This field is required',
      min:
        min !== undefined
          ? { value: min, message: `Minimum is ${min}` }
          : undefined,
      max:
        max !== undefined
          ? { value: max, message: `Maximum is ${max}` }
          : undefined,
    },
  })

  // Format hiển thị: 1000 ➝ 1.000
  const formatNumber = (val) => {
    if (val === '' || val === null || isNaN(val)) return ''
    return Number(val).toLocaleString('de-DE') // dùng dấu chấm
  }

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\./g, '') // bỏ dấu chấm
    if (!/^\d*$/.test(rawValue)) return // chỉ cho phép số

    onChange(rawValue)
    onFieldChange?.(e)
  }

  return (
    <Box>
      {label && (
        <Typography variant="caption" fontWeight={600} color="textSecondary">
          {label}
        </Typography>
      )}
      <TextField
        type="text"
        size="medium"
        variant="outlined"
        fullWidth
        name={name}
        value={formatNumber(value)}
        onChange={handleChange}
        onBlur={onBlur}
        inputRef={ref}
        error={!!error}
        helperText={error?.message}
        placeholder={placeholder}
        inputProps={{
          inputMode: 'numeric',
        }}
        {...props}
      />
    </Box>
  )
}
