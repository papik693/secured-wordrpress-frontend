import { CiLogout } from 'react-icons/ci'
import { useLogout } from '../hooks/useLogout'

const Logout = () => {
  const { mutate } = useLogout()

  return (
    <button
      onClick={() => mutate()}
      className="text-red-500 underline cursor-pointer flex gap-2 items-center px-4 font-semibold hover:text-red-300"
    >
      <CiLogout />
      Logout
    </button>
  )
}

export default Logout
