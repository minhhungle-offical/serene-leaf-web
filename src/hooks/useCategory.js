import { categoryApi } from '@/api/categoryApi'
import { useQuery } from '@tanstack/react-query'

export const useCategories = () => {
  const queryKey = ['/categories']

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => categoryApi.getAll(),
  })

  return {
    data,
    isLoading,
    error,
  }
}
