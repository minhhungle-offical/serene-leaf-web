import logo from '@/assets/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { Subscribe } from './Subscribe'
import Link from 'next/link'

const socialList = [
  {
    icon: <FacebookIcon />,
    value: 'facebook',
  },
  {
    icon: <TwitterIcon />,
    value: 'twitter',
  },
  {
    icon: <InstagramIcon />,
    value: 'instagram',
  },
  {
    icon: <YouTubeIcon />,
    value: 'youtube',
  },
]

const menuList = [
  {
    label: 'Home',
    path: '/home',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
]

const aboutList = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Find Us',
    path: '/contact',
  },
]

export function Footer({ isLoading, onSubscribe }) {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f1ea' }}>
      <Container>
        <Box sx={{ py: 10 }}>
          <Box width={{ xs: '100%', sm: 'auto' }} sx={{ my: 5 }}>
            <Box>
              <Typography
                variant="h6"
                gutterBottom
                fontWeight={600}
                color="primary"
              >
                Subscribe to Our Newsletter
              </Typography>

              <Typography fontWeight={600} gutterBottom>
                Stay in the know, subscribe for news and latest promotions!
              </Typography>

              <Subscribe
                isLoading={isLoading}
                onSubscribe={(formValues) => onSubscribe?.(formValues)}
              />
            </Box>
          </Box>

          <Divider />

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ my: 5, mx: -3 }}
          >
            <Box width={{ xs: '100%', sm: 1 / 3 }}>
              <Box sx={{ p: 3 }}>
                <Box component={Link} href="/">
                  <Box
                    component="img"
                    alt="logo"
                    loading="lazy"
                    src={logo.src}
                  />
                </Box>

                <Typography sx={{ mt: 3 }}>
                  123 Ipsum Street, Consectetur Adipiscing, Ipsum City, Dolor
                  State, 56789(123) 456 - 7891 (123) 456 - 7891
                </Typography>
              </Box>
            </Box>

            <Box width={{ xs: '100%', sm: 'auto' }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="primary"
                  sx={{ mb: 3 }}
                >
                  MENU
                </Typography>

                <Stack
                  sx={{
                    '& a': {
                      color: 'inherit',
                      textDecoration: 'none',
                    },

                    '.active': {
                      color: 'primary.main',
                      '& p': {
                        fontWeight: 600,
                      },
                    },
                  }}
                >
                  {menuList.map((menu, idx) => (
                    <Box component={Link} href={menu.path} key={idx}>
                      <Typography>{menu.label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>

            <Box width={{ xs: '100%', sm: 'auto' }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 3 }}
                  fontWeight={600}
                  color="primary"
                >
                  ABOUT
                </Typography>

                <Stack
                  sx={{
                    '& a': {
                      color: 'inherit',
                      textDecoration: 'none',
                    },

                    '.active': {
                      color: 'primary.main',
                      '& p': {
                        fontWeight: 600,
                      },
                    },
                  }}
                >
                  {aboutList.map((menu, idx) => (
                    <Box component={Link} href={menu.path} key={idx}>
                      <Typography>{menu.label}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>

            <Box width={{ xs: '100%', sm: 'auto' }}>
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  color="primary"
                  sx={{ mb: 3 }}
                >
                  SOCIAL
                </Typography>

                <Stack direction="row" alignItems="center">
                  {socialList?.map((item, idx) => (
                    <IconButton key={idx}>{item.icon}</IconButton>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Divider />

        <Box sx={{ py: 3 }}>
          <Typography textAlign="center" variant="subtitle2">
            {new Date().getFullYear() +
              `. Built by Salmon Pixel · Powered by Minh Hung Le`}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
