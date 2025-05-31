import { Title } from '@/components/Common/Title'
import { BlogFilter } from '@/components/Layouts/Blogs/BlogFilter'
import { BlogList } from '@/components/Layouts/Blogs/BlogList'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { usePosts } from '@/hooks/usePost'
import { Box, Container, Pagination, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function BlogPage() {
  const [params, setParams] = useState({ page: 1, limit: 6 })

  const router = useRouter()

  const { data: postList, isLoading, pagination } = usePosts(params)

  function handlePageChange(e, newPage) {
    setParams({
      ...params,
      page: newPage,
    })
  }
  function handleFilterChange(newParams) {
    setParams(newParams)
  }

  return (
    <MainLayout>
      <Container>
        <Box sx={{ my: 10 }}>
          <Title
            pageName="Blog"
            title="Explore Recipes & Tips"
            subtitle=" Fusce ornare tristique eros, sit amet vehicula ligula pretium et.
            Quisque eleifend turpis sed libero venenatis accumsan."
          />
        </Box>

        <Stack sx={{ my: 10 }}>
          <Box sx={{ mb: 3 }}>
            <BlogFilter
              filterParams={params}
              onFilterChange={handleFilterChange}
            />
          </Box>

          <Box data-aos-duration="2000">
            <BlogList
              blogList={postList}
              isLoading={isLoading}
              onCardClick={(blog) => router.push(`/blogs/${blog.slug}`)}
            />

            <Stack justifyContent="center" alignItems="center" sx={{ my: 3 }}>
              <Pagination
                variant="outlined"
                shape="rounded"
                page={params.page}
                count={pagination?.totalPages}
                onChange={handlePageChange}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}
