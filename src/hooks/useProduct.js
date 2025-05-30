import { productApi } from '@/api/productApi'
import { useQuery } from '@tanstack/react-query'

export const useProducts = (params) => {
  const queryKey = ['/products', params]

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => productApi.getAll(params),
  })

  return {
    data: data?.data || [],
    pagination: data?.meta || null,
    isLoading,
    error,
  }
}

export const useProduct = (id) => {
  const queryKey = ['/product', id]

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => productApi.getById(id),
  })

  return {
    data,
    isLoading,
    error,
  }
}
