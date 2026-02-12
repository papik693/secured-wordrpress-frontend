import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import useMe from '../hooks/useMe'
import Logout from './Logout'

const UserMenu = () => {
  const { data: me, isLoading } = useMe()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return <AiOutlineLoading3Quarters className="animate-spin" />
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
      >
        <FaUserCircle className="text-2xl" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

          <div className="absolute right-0 mt-2 w-48 rounded-md bg-[#111] border border-white/10 shadow-xl py-1 z-20">
            <p className="max-w-37.5 px-4 text-white">{me?.username}</p>
            <p className="max-w-37.5 px-4 text-white/50">{me?.email}</p>
            <Logout />
          </div>
        </>
      )}
    </div>
  )
}

export default UserMenu
