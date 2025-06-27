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
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import MobileNav from './MobileNav'

export function Header({
  token,
  user = null,
  menuList = [],
  cartTotal = 0,
  logout,
}) {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = router.pathname

  const toggleDrawer = () => {
    setMobileOpen((x) => !x)
  }

  return (
    <>
      <AppBar elevation={0} color="inherit" position="static" sx={{ py: 1 }}>
        <Container>
          <Toolbar disableGutters>
            {/* Mobile menu icon */}
            <IconButton
              edge="start"
              color="primary"
              sx={{ display: { md: 'none' }, mr: 2 }}
              onClick={toggleDrawer}
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
                  <Button
                    color="inherit"
                    sx={{
                      color:
                        item.href.pathname === pathname
                          ? 'primary.main'
                          : 'inherit',
                    }}
                  >
                    {item.label}
                  </Button>
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
                <Badge badgeContent={cartTotal} edge="end" color="primary">
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
            </Stack>

            <Box flexGrow={1} sx={{ display: { xs: 'none', md: 'flex' } }} />

            {/* Login / Logout / Welcome */}
            {!token ? (
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Button component={Link} href="/auth/sign-up" color="inherit">
                  Register
                </Button>

                <Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: 'grey.400', height: 20 }}
                  />
                </Box>

                <Button
                  component={Link}
                  href={{
                    pathname: '/auth/login',
                    query: { redirect: router.asPath },
                  }}
                  color="inherit"
                >
                  Login
                </Button>
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, mx: 1 }}>
                  Hello, {user?.name}
                </Typography>
                <Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: 'grey.400', height: 20 }}
                  />
                </Box>
                <IconButton color="inherit" onClick={logout} title="Logout">
                  <LogoutIcon />
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Nav */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menuList={menuList}
        token={token}
        logout={logout}
        logo={logo}
        pathname={pathname}
      />
    </>
  )
}
