import { CiLogout } from 'react-icons/ci'
import { useLogout } from '../hooks/useLogout'

const Logout = () => {
  const { logout } = useLogout()

  return (
    <button
      onClick={() => logout()}
      className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all group"
    >
      <CiLogout className="text-lg group-hover:scale-110 transition-transform" />
      <span>Logout</span>
    </button>
  )
}

export default Logout
