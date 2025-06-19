import logo from '@/assets/logo.svg'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import Link from 'next/link'

export function Header({
  token,
  user = null,
  menuList = [],
  cartTotal = 0,
  logout,
}) {
  const router = useRouter()

  return (
    <AppBar elevation={0} color="inherit" position="static" sx={{ py: 1 }}>
      <Container>
        <Toolbar disableGutters>
          {/* Mobile menu icon */}
          <IconButton
            edge="start"
            color="primary"
            sx={{ display: { md: 'none' }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
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

          {/* Menu links & buttons */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
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
            {/* Menu list */}
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

            {/* Cart icon */}
            <IconButton
              color="inherit"
              sx={{ mr: 1 }}
              component={Link}
              href={
                token
                  ? '/cart'
                  : {
                      pathname: '/auth/login',
                      query: { redirect: router.asPath },
                    }
              }
            >
              <Badge badgeContent={cartTotal} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Stack>

          <Box flexGrow={1} />

          {/* Login / Logout / Welcome */}
          {!token ? (
            <>
              <Button component={Link} href="/auth/sign-up" color="inherit">
                Đăng ký
              </Button>
              <Button
                component={Link}
                href={{
                  pathname: '/auth/login',
                  query: { redirect: router.asPath },
                }}
                color="inherit"
              >
                Đăng nhập
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body2" sx={{ fontWeight: 600, mx: 1 }}>
                Xin chào, {user?.name}
              </Typography>
              <IconButton color="inherit" onClick={logout} title="Logout">
                <LogoutIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
