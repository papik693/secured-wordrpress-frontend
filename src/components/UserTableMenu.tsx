import { useState } from 'react'
import { useDeleteUser } from '../hooks/useDeleteUser'
import { useToggleStaff } from '../hooks/useToggleStaff'
import Confirm from './Confirm'

type Props = {
  id: number
  is_staff: boolean
}

type ActionType = 'toggle' | 'delete' | null

const UserTableMenu = ({ id, is_staff }: Props) => {
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
  }

  return (
    <>
      <div className="absolute right-0 mt-2 w-44 bg-[#111] border border-[#333] rounded-lg z-20">
        <button
          onClick={() => setAction('toggle')}
          className="block w-full px-4 py-2 text-left hover:bg-[#222] cursor-pointer text-green-300"
        >
          {is_staff ? 'Remove Permission' : 'Allow User'}
        </button>
        <button
          onClick={() => setAction('delete')}
          className="block w-full px-4 py-2 text-left hover:bg-[#222] cursor-pointer text-red-400"
        >
          Delete User
        </button>
      </div>
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
