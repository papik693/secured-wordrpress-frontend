import { useMutation, useQueryClient } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import type { LoginSchemaType } from '../schemas/loginSchema'
import type { User } from '../types/user'
import { api } from '../utils/api'

export const useLogin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: login, isPending } = useMutation({
    mutationFn: async (data: LoginSchemaType) => {
      return api
        .post('user/login/', {
          json: data,
        })
        .json<{ user: User }>()
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['me'], data.user)
      navigate('/')
    },
    onError: async (err) => {
      if (err instanceof HTTPError) {
        const errorJson = await err.response.json<{
          nonFieldErrors: string[]
        }>()
        toast.error(errorJson.nonFieldErrors[0])
      }
    },
  })
  return { login, isPending }
}
