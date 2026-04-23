import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { SendMessageSchemaType } from '../schemas/sendMessageSchema'
import type { Message } from '../types/type'
import { api } from '../utils/api'

export const useSendMessage = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: ({ message }: SendMessageSchemaType) => {
      return api.post('chat/', { json: { message } }).json<{ output: string }>()
    },
    onMutate: async ({ message }: SendMessageSchemaType) => {
      await queryClient.cancelQueries({ queryKey: ['messages'] })

      const previousMessages = queryClient.getQueryData<{
        messages: Message[]
      }>(['messages'])

      const optimisticMessage: Message = {
        id: Date.now(),
        content: message,
        role: 'user',
      }

      queryClient.setQueryData<{ messages: Message[] }>(
        ['messages'],
        (old) => ({
          messages: [...(old?.messages || []), optimisticMessage],
        }),
      )

      return { previousMessages }
    },
    onSuccess(data) {
      const aiMessage: Message = {
        id: Date.now() + 1,
        content: data.output,
        role: 'assistant',
      }
      queryClient.setQueryData<{ messages: Message[] }>(
        ['messages'],
        (old) => ({
          messages: [...(old?.messages || []), aiMessage],
        }),
      )
    },
  })

  return { mutate, isPending }
}
