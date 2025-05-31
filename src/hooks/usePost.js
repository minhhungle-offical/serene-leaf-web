import { postApi } from '@/api/postApi'
import { useQuery } from '@tanstack/react-query'

export const usePosts = (params) => {
  const queryKey = ['/posts', params]

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => postApi.getAll(params),
  })

  return {
    data: data?.data || [],
    pagination: data?.meta || null,
    isLoading,
    error,
  }
}
export const usePost = (slug) => {
  const queryKey = ['/post', slug]

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => postApi.getSlug(slug),
  })

  return {
    data,
    isLoading,
    error,
  }
}
