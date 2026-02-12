import { useQuery } from '@tanstack/react-query'
import type { User } from '../types/user'
import { api } from '../utils/api'

const getUsers = async (): Promise<User[]> => {
  const response = await api.get('user/all').json<User[]>()
  return response
}

export const useGetAllUsers = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
  return { users, isLoading }
}
