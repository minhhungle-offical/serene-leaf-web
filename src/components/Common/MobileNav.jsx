import {
  alpha,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import Link from 'next/link'

export default function MobileNav({
  open,
  onClose,
  menuList = [],
  token,
  logout,
  logo,
  pathname,
}) {
  const isSelected = (href) =>
    typeof href === 'string' ? pathname === href : pathname === href.pathname

  const renderMenuItems = () =>
    menuList.map((item, idx) => (
      <ListItem disablePadding key={idx}>
        <ListItemButton
          component={Link}
          href={item.href}
          selected={isSelected(item.href)}
          sx={{
            transition: 'background-color 0.3s, transform 0.2s',
            '&.Mui-selected': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.5),
              '& .MuiListItemText-primary': {
                color: 'primary.contrastText',
              },
            },
          }}
        >
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              sx: {
                fontWeight: isSelected(item.href) ? 600 : 500,
                color: isSelected(item.href)
                  ? 'primary.contrastText'
                  : 'text.primary',
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    ))

  const renderAuthButtons = () =>
    !token ? (
      <>
        {['/auth/login', '/auth/sign-up'].map((path, i) => (
          <ListItem disablePadding key={i}>
            <ListItemButton
              component={Link}
              href={path}
              selected={pathname === path}
              sx={{
                '&.Mui-selected': {
                  bgcolor: 'primary.light',
                  color: 'white',
                  fontWeight: 600,
                },
              }}
            >
              <ListItemText
                primary={path.includes('login') ? 'Login' : 'Register'}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </>
    ) : (
      <ListItem disablePadding>
        <ListItemButton onClick={logout}>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    )

  return (
    <Drawer variant="temporary" anchor="left" open={open} onClose={onClose}>
      <List>
        {/* Logo */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            href="/"
            sx={{ justifyContent: 'center' }}
          >
            <Box
              component="img"
              alt="logo"
              loading="lazy"
              src={logo?.src}
              sx={{
                height: 40,
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* Menu */}
        {renderMenuItems()}

        <Divider sx={{ my: 1 }} />

        {/* Auth */}
        {renderAuthButtons()}
      </List>
    </Drawer>
  )
}
