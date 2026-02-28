import { useMutation } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import type { SignUpSchemaType } from '../schemas/signUpSchema'
import { api } from '../utils/api'

export const useSignUp = () => {
  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: SignUpSchemaType) => {
      return await api
        .post('user/sign-up/', { json: data })
        .json<{ message: string }>()
    },
    onSuccess: ({ message }) => {
      toast(message)
      navigate('/login')
    },
    onError: async (err) => {
      if (err instanceof HTTPError) {
        const errorJson = await err.response.json<Record<string, string[]>>()
        Object.values(errorJson).forEach((messages) => {
          messages.forEach((message) => {
            toast.error(message)
          })
        })
      }
    },
  })

  return { signUp: mutate, isPending }
}
