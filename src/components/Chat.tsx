import { useRef } from 'react'
import { useGetChat } from '../hooks/useGetChat'

const Chat = () => {
  const { messages } = useGetChat()
  const messageEndRef = useRef<HTMLDivElement>(null)
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] p-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#FFFFFF16] [&::-webkit-scrollbar-thumb]:rounded-lg w-full">
        {messages.map((m) => (
          <div
            className={` ${m.sender === 'User' ? 'self-end' : 'self-start'}`}
            key={m.id}
          >
            <div className="text-sm text-gray-300 mb-1">{m.sender}</div>
            <div
              className={`${'p-2 rounded-lg'} ${
                m.sender === 'User'
                  ? 'bg-yellow-300 text-[#0B1C2D]'
                  : 'bg-black border border-[#FFFFFF16]'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>
      <form className="flex flex-col sm:flex-row gap-5">
        <input
          type="text"
          className="bg-transparent border w-full rounded-lg p-2 border-[#FFFFFF16]"
        />

        <button className="bg-yellow-300 text-[#0B1C2D] rounded-xl p-2 cursor-pointer hover:bg-yellow-200 transition">
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
