import { useMutation, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { toast } from 'react-toastify'
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
    onError: async (err) => {
      if (err instanceof HTTPError) {
        const errData = await err.response.json()
        if (errData.message) {
          toast.error(errData.message)
        } else {
          Object.values(errData).forEach((messages) => {
            if (Array.isArray(messages)) {
              messages.forEach((message) => {
                toast.error(message)
              })
            }
          })
        }
      }
    },
  })

  return { deleteUser }
}
