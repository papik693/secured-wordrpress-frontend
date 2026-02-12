import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Navigate, Outlet } from 'react-router'
import useMe from '../hooks/useMe'

const GuestRoute = () => {
  const { me, isLoading } = useMe()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-5xl" />
      </div>
    )
  }

  if (me) {
    return <Navigate to="/" />
  }
  return <Outlet />
}

export default GuestRoute
