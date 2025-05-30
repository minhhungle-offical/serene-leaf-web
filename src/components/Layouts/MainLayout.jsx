import { Box } from '@mui/material'
import { Header } from '../Common/Header'
import { Footer } from '../Common/Footer'

const menuList = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Blogs',
    path: '/blogs',
  },
  {
    label: 'Find Us',
    path: '/contact',
  },
]

export function MainLayout({ children }) {
  return (
    <Box sx={{ bgcolor: '#f0f0f0' }}>
      <Header menuList={menuList} />
      {children}
      <Footer />
    </Box>
  )
}
