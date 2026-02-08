import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { api } from '../utils/api'

export const useLogout = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async () => {
      const data = await api.post('user/logout/').json<{ message: string }>()
      return data
    },
    onSuccess: ({ message }) => {
      queryClient.clear()
      toast.success(message)
      navigate('/login')
    },
  })
}
