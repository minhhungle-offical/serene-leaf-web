import { SearchBox } from '@/components/FormFields/SearchBox'
import { Box, Stack } from '@mui/material'

export function BlogFilter({ filterParams, onFilterChange }) {
  function handleSearchChange(search) {
    const newParams = {
      ...filterParams,
      search,
      page: 1,
    }

    onFilterChange?.(newParams)
  }

  return (
    <Stack flexDirection="row" alignItems="center">
      <Box width="100%">
        <SearchBox onSearchChange={handleSearchChange} />
      </Box>
    </Stack>
  )
}
