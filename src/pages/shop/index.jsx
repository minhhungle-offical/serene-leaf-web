import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Container,
  LinearProgress,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'

import { Title } from '@/components/Common/Title'
import { ShopFilter } from '@/components/Layouts/Products/ShopFilter'
import { ShopList } from '@/components/Layouts/Products/ShopList'
import { useProducts } from '@/hooks/useProduct'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { useCategories } from '@/hooks/useCategory'

export default function ShopPage() {
  const router = useRouter()

  const [params, setParams] = useState({
    page: 1,
    limit: 6,
  })

  const { data: productList, isLoading, pagination } = useProducts(params)
  const { data: categoryList } = useCategories()

  const handlePageChange = (_event, newPage) => {
    const newParams = { ...params, page: newPage }

    setParams(newParams)
  }

  const handleFilterChange = (newParams) => {
    setParams(newParams)
  }

  return (
    <MainLayout>
      <Container>
        <Box sx={{ my: 10 }}>
          <Title
            pageName="Shop"
            title="Pick Your Favorite Tea"
            subtitle="Cras dapibus varius sapien ac efficitur. Fusce tempus tellus quis laoreet volutpat. Pellentesque vehicula pellentesque nulla at."
          />
        </Box>

        <Stack direction="row" flexWrap="wrap" sx={{ my: 10, mx: -1.5 }}>
          <Box sx={{ width: { xs: '100%', sm: 250 } }}>
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
                filterParams={params}
                onFilterChange={handleFilterChange}
                categoryList={categoryList}
              />
            </Box>
          </Box>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : (
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
                    isLoading={isLoading}
                    onCardClick={(product) =>
                      router.push(`/shop/${product._id}`)
                    }
                  />
                </Box>

                {pagination?.totalPages > 1 && (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{ my: 3 }}
                  >
                    <Pagination
                      variant="outlined"
                      shape="rounded"
                      page={params.page}
                      count={pagination.totalPages}
                      onChange={handlePageChange}
                    />
                  </Stack>
                )}
              </Stack>
            </Box>
          )}
        </Stack>
      </Container>
    </MainLayout>
  )
}
