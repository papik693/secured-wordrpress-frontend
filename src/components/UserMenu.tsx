import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import useMe from '../hooks/useMe'
import { cn } from '../utils/cn'
import Logout from './Logout'

const UserMenu = () => {
  const { data: me, isLoading } = useMe()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return <AiOutlineLoading3Quarters className="animate-spin" />
  }

  return (
    <div className="absolute">
      <button
        className="text-lg flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#1a1a1a] cursor-pointer transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaUserCircle className="text-xl" />
        <span className="text-base leading-none">{me?.email}</span>
        <MdKeyboardArrowDown
          className={cn('text-xl', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-[#1a1a1a] border-[#292929] py-1 z-20">
            <Logout />
          </div>
        </>
      )}
    </div>
  )
}

export default UserMenu
