import { Box } from '@mui/material'
import { Header } from '../Common/Header'
import { Footer } from '../Common/Footer'
import { useEffect, useState } from 'react'
import { cartApi } from '@/api/cartApi'
import dynamic from 'next/dynamic'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'

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
  const { cartTotal } = useCart()
  const { token, user, logout } = useAuth()
  return (
    <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <Header
        user={user}
        menuList={menuList}
        cartTotal={cartTotal}
        token={token}
        logout={() => logout()}
      />
      <Box sx={{ minHeight: '100vh' }}>{children}</Box>
      <Footer />
    </Box>
  )
}
