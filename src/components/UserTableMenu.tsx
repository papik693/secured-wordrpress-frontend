import { useDeleteUser } from '../hooks/useDeleteUser'
import { useToggleStaff } from '../hooks/useToggleStaff'

type Props = {
  id: number
  is_staff: boolean
}

const UserTableMenu = ({ id, is_staff }: Props) => {
  const { toggle } = useToggleStaff()
  const { deleteUser } = useDeleteUser()

  const handleToggle = (id: number) => {
    if (!confirm('Do you want to change permission?')) return
    toggle(id)
  }

  const handleDelete = (id: number) => {
    if (!confirm('Do you want to delete this user?')) return
    deleteUser(id)
  }

  return (
    <div className="absolute right-0 mt-2 w-44 bg-[#111] border border-[#333] rounded-lg z-20">
      <button
        onClick={() => handleToggle(id)}
        className="block w-full px-4 py-2 text-left hover:bg-[#222] cursor-pointer text-green-300"
      >
        {is_staff ? 'Remove Permission' : 'Allow User'}
      </button>
      <button
        onClick={() => handleDelete(id)}
        className="block w-full px-4 py-2 text-left hover:bg-[#222] cursor-pointer text-red-400"
      >
        Delete User
      </button>
    </div>
  )
}

export default UserTableMenu
