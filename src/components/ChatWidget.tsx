import { useState } from 'react'
import { IoChatbox } from 'react-icons/io5'
import Chat from './Chat'

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-10 right-10">
      <div className="relative">
        <button
          className="bg-yellow-400 border  border-yellow-500 text-4xl lg:text-5xl text-[#0B1C2D] cursor-pointer p-3 lg rounded-full hover:bg-yellow-200 transition hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          <IoChatbox />
        </button>

        {open && (
          <div className="absolute bottom-full mb-3 right-0 bg-[#0A0A0A] border-[#FFFFFF16] border p-4 rounded-lg shadow min-w-87.5 lg:min-w-150">
            <Chat />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatWidget
