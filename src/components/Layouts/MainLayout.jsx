import { Box } from '@mui/material'
import { Header } from '../Common/Header'
import { Footer } from '../Common/Footer'

const menuList = [
  {
    label: 'Home',
    href: { pathname: '/' },
  },
  {
    label: 'Shop',
    href: { pathname: '/shop', query: { page: 1, limit: 6 } },
  },
  {
    label: 'About',
    href: { pathname: '/about' },
  },
  {
    label: 'Blogs',
    href: { pathname: '/blogs', query: { page: 1, limit: 6 } },
  },
  {
    label: 'Find Us',
    href: { pathname: '/contact' },
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
