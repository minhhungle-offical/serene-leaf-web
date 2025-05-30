import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import {
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material'
import logo from '@/assets/logo.svg'
import { Link } from 'next/link'

const drawerWidth = 240

export default function SideBar({
  primaryMenuList,
  secondaryMenuList,
  user,
  onClose,
  onMenuClick,
}) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: drawerWidth,
          height: '100vh',
          boxSizing: 'border-box',
          border: 0,
        },
      }}
      variant="permanent"
      anchor="left"
      open={false}
      onClose={() => onClose?.()}
    >
      <Stack height="100%" sx={{ pb: 3 }}>
        <Box component={Link} href="/admin" sx={{ p: 3 }}>
          <Box
            component="img"
            loading="lazy"
            alt="logo"
            width="90%"
            src={logo.src}
          />
        </Box>

        <List>
          {primaryMenuList &&
            primaryMenuList.length &&
            primaryMenuList.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton onClick={() => onMenuClick?.(item)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>

        <Box flexGrow={1} />

        <List>
          {secondaryMenuList &&
            secondaryMenuList.length &&
            secondaryMenuList.map((item, idx) => (
              <ListItem key={idx} disablePadding>
                <ListItemButton onClick={() => onMenuClick?.(item)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {user ? <AccountCircleIcon /> : <Avatar>H</Avatar>}
              </ListItemIcon>
              <ListItemText primary="Minh Hung" />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  )
}
