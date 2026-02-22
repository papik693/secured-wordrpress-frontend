import { useState } from 'react'
import { useDeleteUser } from '../hooks/useDeleteUser'
import { useToggleStaff } from '../hooks/useToggleStaff'
import Confirm from './Confirm'

type Props = {
  id: number
  is_staff: boolean
  closeMenu: () => void
}

type ActionType = 'toggle' | 'delete' | null

const UserTableMenu = ({ id, is_staff, closeMenu }: Props) => {
  const { toggle } = useToggleStaff()
  const { deleteUser } = useDeleteUser()

  const [action, setAction] = useState<ActionType>(null)

  const handleConfirm = () => {
    if (action === 'toggle') {
      toggle(id)
    }
    if (action === 'delete') {
      deleteUser(id)
    }
    setAction(null)
    closeMenu()
  }

  return (
    <>
      {action === null && (
        <>
          <div className="fixed inset-0 z-10" onClick={closeMenu} />
          <div className="fixed bottom-0 w-full md:absolute md:bottom-auto right-0 mt-2 md:w-56 rounded-xl bg-[#111] border border-white/10 shadow-2xl py-2 z-20 overflow-hidden px-1 transition">
            <button
              onClick={() => setAction('toggle')}
              className="flex items-center px-3 py-2 text-sm  hover:bg-white/5 hover:text-green-400 rounded-lg transition-colors  w-full  text-left cursor-pointer text-green-300"
            >
              {is_staff ? 'Remove Permission' : 'Allow User'}
            </button>
            <button
              onClick={() => setAction('delete')}
              className="flex items-center px-3 py-2 text-sm  hover:bg-white/5 hover:text-red-500 rounded-lg transition-colors  w-full  text-left  cursor-pointer text-red-400"
            >
              Delete User
            </button>
          </div>
        </>
      )}
      <Confirm
        open={action !== null}
        onCancel={() => setAction(null)}
        onConfirm={handleConfirm}
      >
        {action === 'delete'
          ? 'Do you want to delete this user?'
          : 'Do you want to change this user permission?'}
      </Confirm>
    </>
  )
}

export default UserTableMenu
