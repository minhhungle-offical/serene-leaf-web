import { MainLayout } from '@/components/Layouts/MainLayout'
import { usePost } from '@/hooks/usePost'
import {
  Box,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

export default function BlogDetail() {
  const router = useRouter()
  const { slug } = router.query

  console.log('slug:', slug)
  const { data, isLoading, error } = usePost(slug)

  return (
    <MainLayout>
      {error && <div>Failed to load product.</div>}

      {!slug || isLoading ? (
        <LinearProgress />
      ) : (
        <Box sx={{ py: 10 }}>
          <Container>
            <Stack spacing={3}>
              <Typography variant="h3" fontWeight={600}>
                {data?.title}
              </Typography>

              <Typography variant="h6">{data?.shortDescription}</Typography>

              <Typography fontWeight={600} color="grey">
                By {data?.author.name} -{' '}
                {dayjs(data?.createdAt).format('MMM DD, YYYY')}
              </Typography>

              <Box>
                <Box
                  sx={{ width: '100%' }}
                  component="img"
                  loading="lazy"
                  alt="image"
                  src={data?.image?.url}
                />
              </Box>

              <Box sx={{ width: '100%' }}>
                <Typography
                  dangerouslySetInnerHTML={{ __html: data?.content }}
                />
              </Box>
            </Stack>
          </Container>
        </Box>
      )}
    </MainLayout>
  )
}
