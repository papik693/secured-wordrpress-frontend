import { BsThreeDots } from 'react-icons/bs'
import { useGetAllUsers } from '../hooks/useGetAllUsers'

const Users = () => {
  const { users } = useGetAllUsers()
  return (
    <div className="overflow-x-auto">
      <div className="rounded-xl overflow-hidden border border-[#FFFFFF16]">
        <table className="w-full border-collapse">
          <thead className="bg-[#FFFFFF11] text-gray-400 text-left text-sm">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Allowed</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {users?.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#0A0A0A] transition-colors"
              >
                <td className="px-4 py-2 border-b border-[#292929]">
                  {user.id}
                </td>
                <td className="px-4 py-2 border-b border-[#292929]">
                  {user.username}
                </td>
                <td className="px-4 py-2 border-b border-[#292929]">
                  {user.email}
                </td>
                <td className="px-4 py-2 border-b border-[#292929]">
                  {user.is_staff ? '✅ Allowed' : '❌ Not Allowed'}
                </td>
                <td className="px-4 py-2 border-b border-[#292929]">
                  <button className="cursor-pointer">
                    <BsThreeDots />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
