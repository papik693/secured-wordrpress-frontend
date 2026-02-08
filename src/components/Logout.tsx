import { useLogout } from '../hooks/useLogout'

const Logout = () => {
  const { mutate } = useLogout()

  const logout = () => {
    mutate()
  }

  return (
    <button onClick={logout} className="text-red-500 underline cursor-pointer">
      Logout
    </button>
  )
}

export default Logout
