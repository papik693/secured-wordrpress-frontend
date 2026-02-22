import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router'
import useMe from '../hooks/useMe'
import Logout from './Logout'

const UserMenu = () => {
  const { me, isLoading } = useMe()
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
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed bottom-0 left-0 w-full md:absolute md:bottom-auto md:left-auto md:right-0 md:top-full md:mt-2 md:w-56 rounded-xl bg-[#111] border border-white/10 shadow-2xl py-2 z-20 overflow-hidden">
            <div className="px-4 py-3 border-b border-white/5 mb-1">
              <p className="text-sm font-medium text-white truncate">
                {me?.username}
              </p>
              <p className="text-xs text-white/50 truncate">{me?.email}</p>
            </div>

            <div className="px-1">
              <Link
                to="/profile"
                className="flex items-center px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white rounded-lg transition-colors"
              >
                Profile
              </Link>

              <div className="h-px bg-white/5 my-1" />

              <Logout />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default UserMenu
