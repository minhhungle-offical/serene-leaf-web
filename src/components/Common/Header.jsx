import logo from '@/assets/logo.svg'
import { checkLogin } from '@/utils/common'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import Link from 'next/link'

export function Header({ token, menuList = [], cartTotal = 0, onShopNow }) {
  return (
    <AppBar elevation={0} color="inherit" position="static" sx={{ py: 1 }}>
      <Container>
        <Toolbar disableGutters>
          <IconButton
            edge="start"
            color="primary"
            sx={{ display: { md: 'none' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box component={Link} href="/">
            <Box
              component="img"
              alt="logo"
              loading="lazy"
              src={logo.src}
              sx={{
                '&:hover': {
                  transform: 'scale(1.2)',
                },
                transition: '0.35s',
              }}
            />
          </Box>

          <Box flexGrow={1} />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexGrow: { xs: 0, md: 1 },
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
              },
              '.active': {
                color: 'primary.main',
              },
              '& button': { textTransform: 'none', fontWeight: 600 },
            }}
          >
            {menuList?.map((item, idx) => (
              <Box
                component={Link}
                href={item.href}
                key={idx}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Button color="inherit">{item.label}</Button>
              </Box>
            ))}

            <IconButton
              color="inherit"
              sx={{ mr: 2 }}
              component={Link}
              href={token ? '/cart' : '/auth/login'}
            >
              <Badge badgeContent={cartTotal} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/shop?page=1&limit=6"
            onClick={() => onShopNow?.()}
            sx={{ display: { xs: 'none', md: 'flex' }, borderRadius: '10px' }}
          >
            SHOP NOW
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
