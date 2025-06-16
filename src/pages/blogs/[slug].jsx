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
            <Typography
              variant="h3"
              fontWeight={600}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {post?.title}
            </Typography>

            <Typography
              variant="h6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              {post?.shortDescription}
            </Typography>

            <Typography
              fontWeight={600}
              color="grey"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              By {post?.author?.name} - {post?.createdAt}
            </Typography>

            <Box
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Box
                sx={{ width: '100%' }}
                component="img"
                loading="lazy"
                alt={post?.title}
                src={post?.image?.url}
              />
            </Box>

            <Box
              sx={{ width: '100%' }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
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
      revalidate: 60,
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}
