import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../utils/api'

export const useDeleteUser = () => {
  const qc = useQueryClient()
  const { mutate: deleteUser } = useMutation({
    mutationFn: async (userId: number) => {
      return api.delete(`user/delete/${userId}/`).json()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['users'] })
    },
  })

  return { deleteUser }
}
