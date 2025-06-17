import { useRouter } from 'next/router'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Title } from '@/components/Common/Title'
import { ShopFilter } from '@/components/Layouts/Products/ShopFilter'
import { ShopList } from '@/components/Layouts/Products/ShopList'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { productApi } from '@/api/productApi'
import { categoryApi } from '@/api/categoryApi'

export default function ShopPage({ productList, categoryList, pagination }) {
  const router = useRouter()
  const query = router.query

  const handlePageChange = (_event, newPage) => {
    router.push({
      pathname: '/shop',
      query: {
        ...router.query,
        page: newPage,
      },
    })
  }

  const handleFilterChange = (newFilters) => {
    router.push({
      pathname: '/shop',
      query: {
        ...newFilters,
        page: 1,
      },
    })
  }

  return (
    <MainLayout>
      <Container>
        <Box sx={{ my: 10 }} data-aos="fade-up" data-aos-duration="1000">
          <Title
            pageName="Shop"
            title="Pick Your Favorite Tea"
            subtitle="Explore our curated selection of premium green teas — each crafted for moments of calm, clarity, and connection."
          />
        </Box>

        <Stack direction="row" flexWrap="wrap" sx={{ my: 10, mx: -1.5 }}>
          {/* FILTER SIDE */}
          <Box
            sx={{ width: { xs: '100%', sm: 250 } }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Box sx={{ px: 1.5, py: 3 }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ mb: 2 }}
                spacing={1}
              >
                <FilterListIcon color="primary" />
                <Typography>Filters</Typography>
              </Stack>

              <ShopFilter
                filterParams={query}
                onFilterChange={handleFilterChange}
                categoryList={categoryList}
              />
            </Box>
          </Box>

          {/* PRODUCT LIST */}
          <Box
            sx={{
              width: { xs: '100%', sm: `calc(100% - 250px)` },
              height: 'auto',
            }}
          >
            <Stack sx={{ p: 1.5, height: '100%' }}>
              <Box flexGrow={1}>
                <ShopList
                  productList={productList}
                  isLoading={false}
                  onCardClick={(product) =>
                    router.push(`/shop/${product.slug}`)
                  }
                />
              </Box>

              {pagination?.totalPages > 1 && (
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ my: 3 }}
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <Pagination
                    variant="outlined"
                    shape="rounded"
                    page={parseInt(query?.page || 1)}
                    count={pagination.totalPages}
                    onChange={handlePageChange}
                  />
                </Stack>
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  try {
    const query = context.query

    const [productRes, categoryRes] = await Promise.all([
      productApi.getAll(query),
      categoryApi.getAll(),
    ])

    return {
      props: {
        productList: await productRes.data,
        pagination: await productRes.meta,
        categoryList: await categoryRes,
      },
    }
  } catch (error) {
    console.error('Error in getServerSideProps:', error)

    return {
      props: {
        productList: [],
        pagination: {
          page: 1,
          limit: 6,
          total: 0,
          totalPages: 1,
        },
        categoryList: [],
        error: 'Failed to load data.',
      },
    }
  }
}
