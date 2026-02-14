import { useMutation, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { toast } from 'react-toastify'
import type { UpdateUserSchemaType } from '../schemas/updateUserSchema'
import { api } from '../utils/api'

export const useUpdateUser = () => {
  const qc = useQueryClient()
  const { mutate: updateUser } = useMutation({
    mutationFn: async ({
      data,
      id,
    }: {
      data: UpdateUserSchemaType
      id?: number
    }) => {
      return api.put(`user/${id}/`, { json: data }).json<{ message: string }>()
    },
    onSuccess: () => {
      toast('User updated Successfully')
      qc.invalidateQueries({ queryKey: ['me'] })
    },
    onError: async (err) => {
      if (err instanceof HTTPError) {
        console.log(err)
        const errData = await err.response.json()
        if (errData.message) {
          toast(errData.message)
        } else {
          Object.values(errData).forEach((messages) => {
            messages.forEach((message) => {
              toast.error(message)
            })
          })
        }
      }
    },
  })

  return { updateUser }
}
