import { useLogout } from '../hooks/useLogout'

const Logout = () => {
  const { mutate } = useLogout()

  return (
    <button
      onClick={() => mutate()}
      className="text-red-500 underline cursor-pointer"
    >
      Logout
    </button>
  )
}

export default Logout
