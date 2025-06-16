import { Title } from '@/components/Common/Title'
import { BlogFilter } from '@/components/Layouts/Blogs/BlogFilter'
import { BlogList } from '@/components/Layouts/Blogs/BlogList'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { postApi } from '@/api/postApi'
import { Box, Container, Pagination, Stack } from '@mui/material'
import { useRouter } from 'next/router'

export default function BlogPage({ postList, pagination }) {
  const router = useRouter()
  const query = router.query

  function handlePageChange(e, newPage) {
    router.push({
      pathname: '/blogs',
      query: { ...query, page: newPage },
    })
  }

  function handleFilterChange(newQuery) {
    router.push({
      pathname: '/blogs',
      query: newQuery,
    })
  }

  return (
    <MainLayout>
      <Container>
        {/* Tiêu đề có hiệu ứng */}
        <Box sx={{ my: 10 }} data-aos="fade-down" data-aos-duration="1000">
          <Title
            pageName="Blog"
            title="Explore Recipes & Tips"
            subtitle="Fusce ornare tristique eros, sit amet vehicula ligula pretium et. Quisque eleifend turpis sed libero venenatis accumsan."
          />
        </Box>

        <Stack sx={{ my: 10 }}>
          {/* Bộ lọc có hiệu ứng */}
          <Box sx={{ mb: 3 }} data-aos="fade-right" data-aos-duration="1000">
            <BlogFilter
              filterParams={query}
              onFilterChange={handleFilterChange}
            />
          </Box>

          {/* Danh sách bài viết */}
          <Box data-aos="fade-up" data-aos-duration="1200">
            <BlogList
              blogList={postList}
              isLoading={false}
              onCardClick={(blog) => router.push(`/blogs/${blog.slug}`)}
            />

            {/* Phân trang có hiệu ứng */}
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{ my: 3 }}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Pagination
                variant="outlined"
                shape="rounded"
                page={Number(query?.page) || 1}
                count={pagination?.totalPages || 1}
                onChange={handlePageChange}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  const { query } = context

  try {
    const res = await postApi.getAll(query)

    return {
      props: {
        postList: res?.data || [],
        pagination: res?.pagination || {},
      },
    }
  } catch (error) {
    console.error('Failed to fetch posts:', error)

    return {
      props: {
        postList: [],
        pagination: { totalPages: 1 },
      },
    }
  }
}
