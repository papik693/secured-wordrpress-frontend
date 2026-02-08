import { useMutation, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { toast } from 'react-toastify'
import type { LoginSchemaType } from '../schemas/loginSchema'
import type { User } from '../types/user'
import { api } from '../utils/api'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      return api
        .post('user/login/', {
          json: data,
        })
        .json<{ user: User }>()
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['me'], data.user)
    },
    onError: async (err) => {
      if (err instanceof HTTPError) {
        const errorJson = await err.response.json<{
          non_field_errors: string[]
        }>()
        toast.error(errorJson.non_field_errors[0])
      }
    },
  })
}
