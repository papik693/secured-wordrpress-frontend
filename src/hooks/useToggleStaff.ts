import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../utils/api'

export const useToggleStaff = () => {
  const qc = useQueryClient()
  const { mutate: toggle } = useMutation({
    mutationFn: async (userId: number) => {
      return api.post(`user/toggle_permission/${userId}/`).json()
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['users'] })
    },
  })

  return { toggle }
}
