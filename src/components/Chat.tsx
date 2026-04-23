import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useGetChat } from '../hooks/useGetChat'
import { useSendMessage } from '../hooks/useSendMessage'
import {
  sendMessageSchema,
  type SendMessageSchemaType,
} from '../schemas/sendMessageSchema'

const Chat = () => {
  const { messages } = useGetChat()

  const messageEndRef = useRef<HTMLDivElement>(null)
  const { mutate, isPending } = useSendMessage()
  const { register, handleSubmit, reset } = useForm<SendMessageSchemaType>({
    resolver: zodResolver(sendMessageSchema),
  })

  const submitHandler = (data: SendMessageSchemaType) => {
    mutate(data)
    reset()
  }

  console.log(messages)

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] p-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#FFFFFF16] [&::-webkit-scrollbar-thumb]:rounded-lg">
        {messages?.map((m) => (
          <div
            className={` ${m.role === 'user' ? 'self-end' : 'self-start'}`}
            key={m.id}
          >
            <div className="text-sm text-gray-300 mb-1">{m.role}</div>
            <div
              className={`${'p-2 rounded-lg'} ${
                m.role === 'user'
                  ? 'bg-yellow-300 text-[#0B1C2D]'
                  : 'bg-black border border-[#FFFFFF16]'
              }`}
            >
              {m.role === 'assistant' ? (
                <div className="prose mx-auto">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                </div>
              ) : (
                m.content
              )}
            </div>
          </div>
        ))}
        {isPending && (
          <div className="self-start">
            <div className="p-2 rounded-lg bg-black border border-[#FFFFFF16]">
              Typing...
            </div>
          </div>
        )}
        <div ref={messageEndRef}></div>
      </div>
      <form
        className="flex flex-col sm:flex-row gap-5"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          type="text"
          className="bg-transparent border w-full rounded-lg p-2 border-[#FFFFFF16]"
          {...register('message')}
        />

        <button className="bg-yellow-300 text-[#0B1C2D] rounded-xl p-2 cursor-pointer hover:bg-yellow-200 transition">
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
