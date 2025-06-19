import { Box, IconButton, TextField, Typography, Tooltip } from '@mui/material'
import { Add, Remove, Delete } from '@mui/icons-material'
import { formatCurrencyEN } from '@/utils/common'

export function CartItem({ loading, item, onUpdateQuantity, onRemove }) {
  const handleChangeQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(item.product._id, newQuantity)
    }
  }

  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.product._id)
    }
  }

  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid #ddd',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {/* LEFT: Image + Info + Quantity */}
      <Box display="flex" gap={2} sx={{ flex: 1 }}>
        <Box
          component="img"
          src={item.product.image?.url}
          alt={item.product.name}
          width={96}
          height={96}
          sx={{ objectFit: 'cover', borderRadius: 1 }}
        />

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Typography fontWeight={600}>{item.product.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {formatCurrencyEN(item.product.price)}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <IconButton
              onClick={() => handleChangeQuantity(item.quantity - 1)}
              disabled={item.quantity <= 1 || loading}
              size="small"
            >
              <Remove fontSize="small" />
            </IconButton>

            <TextField
              value={item.quantity}
              size="small"
              inputProps={{
                readOnly: true,
                style: { width: 36, textAlign: 'center' },
              }}
            />

            <IconButton
              onClick={() => handleChangeQuantity(item.quantity + 1)}
              disabled={loading}
              size="small"
            >
              <Add fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* RIGHT: Price + Remove */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="space-between"
        height="100%"
      >
        <Typography fontWeight={600}>
          {formatCurrencyEN(item.product.price * item.quantity)}
        </Typography>

        <Tooltip title="Remove item">
          <IconButton
            onClick={handleRemove}
            color="error"
            size="small"
            disabled={loading}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}
