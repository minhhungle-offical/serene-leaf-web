import { Box } from '@mui/material'
import { Header } from '../Common/Header'
import { Footer } from '../Common/Footer'
import { useEffect, useState } from 'react'
import { cartApi } from '@/api/cartApi'
import dynamic from 'next/dynamic'
import { useCart } from '@/contexts/CartContext'

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
  return (
    <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <Header menuList={menuList} cartTotal={cartTotal} />
      <Box sx={{ minHeight: '100vh' }}>{children}</Box>
      <Footer />
    </Box>
  )
}
