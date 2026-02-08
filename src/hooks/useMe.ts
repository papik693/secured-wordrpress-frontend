import { useQuery } from '@tanstack/react-query'
import type { User } from '../types/user'
import { api } from '../utils/api'

const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () =>
      api.get('user/me', { credentials: 'include' }).json<User>(),
    retry: false,
  })
}

export default useMe
