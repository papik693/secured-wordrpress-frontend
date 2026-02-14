import { useMutation } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { toast } from 'react-toastify'
import type { ChangePasswordSchemaType } from '../schemas/changePasswordSchema'
import { api } from '../utils/api'

export const useChangePassword = () => {
  const { mutate: changePassword } = useMutation({
    mutationFn: async ({
      data,
      id,
    }: {
      data: ChangePasswordSchemaType
      id?: number
    }) => {
      return api
        .put(`user/change_password/${id}/`, { json: data })
        .json<{ message: string }>()
    },
    onSuccess: () => {
      toast('Password Changed Successfully')
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

  return { changePassword }
}
