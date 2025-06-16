import { Box, Stack, Typography } from '@mui/material'
import RangeSliderField from '@/components/FormFields/RangeSliderField'
import { SortField } from '@/components/FormFields/SortField'
import { debounce } from 'lodash'
import { SearchBox } from '@/components/FormFields/SearchBox'

export function ShopFilter({ filterParams, onFilterChange, categoryList }) {
  function handleSearchChange(search) {
    const newParams = {
      ...filterParams,
      search,
      page: 1,
    }

    onFilterChange?.(newParams)
  }
  function handleTypeChange(category) {
    const newParams = {
      ...filterParams,
      category,
      page: 1,
    }

    onFilterChange?.(newParams)
  }
  const handlePriceChange = debounce((numbers) => {
    const minPrice = numbers[0]
    const maxPrice = numbers[1]
    const newParams = {
      ...filterParams,
      minPrice,
      maxPrice,
      page: 1,
    }

    onFilterChange?.(newParams)
  })

  return (
    <Stack justifyContent="center" spacing={3} sx={{ width: '100%' }}>
      <Box>
        <SearchBox onSearchChange={handleSearchChange} />
      </Box>

      <Box>
        <SortField
          onChange={handleTypeChange}
          label="Category"
          defaultValue=""
          optionList={
            (Array.isArray(categoryList) &&
              categoryList.length > 0 &&
              categoryList.map((item) => ({
                label: item.name,
                value: item._id,
              }))) ||
            []
          }
        />
      </Box>

      <Box>
        <Typography color="primary">Price ($)</Typography>
        <RangeSliderField
          onChange={handlePriceChange}
          defaultValue={[10, 50]}
        />
      </Box>
    </Stack>
  )
}
