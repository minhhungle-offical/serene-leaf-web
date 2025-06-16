import { postApi } from '@/api/postApi'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { Box, Container, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'

export default function BlogDetail({ post }) {
  return (
    <MainLayout>
      <Box sx={{ py: 10 }}>
        <Container>
          <Stack spacing={3}>
            <Typography variant="h3" fontWeight={600}>
              {post?.title}
            </Typography>

            <Typography variant="h6">{post?.shortDescription}</Typography>

            <Typography fontWeight={600} color="grey">
              By {post?.author?.name} - {post?.createdAt}
            </Typography>

            <Box>
              <Box
                sx={{ width: '100%' }}
                component="img"
                loading="lazy"
                alt="image"
                src={post?.image?.url}
              />
            </Box>

            <Box sx={{ width: '100%' }}>
              {post?.content && (
                <Typography
                  component="div"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  try {
    const res = await postApi.getAll({ page: 1, limit: 100 })
    const { data } = await res
    const paths = data.map((post) => ({
      params: { slug: post.slug },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (err) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps({ params }) {
  try {
    const post = await postApi.getBySlug(params.slug)

    return {
      props: {
        post: {
          ...post,
          createdAt: dayjs(post.createdAt).format('MMM DD, YYYY'),
        },
      },
      revalidate: 60, // ISR: mỗi 60s có thể regenerate
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
