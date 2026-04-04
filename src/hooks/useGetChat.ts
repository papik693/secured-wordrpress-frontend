import { useQuery } from '@tanstack/react-query'
import { type Message } from '../types/type'
import { api } from '../utils/api'

export const useGetChat = () => {
  const { data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => api.get('chat/').json<{ messages: Message[] }>(),
  })

  if (data === undefined) {
    return {}
  }

  return { messages: data.messages }
}
