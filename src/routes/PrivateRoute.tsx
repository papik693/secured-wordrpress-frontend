import { Navigate, Outlet } from 'react-router'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useMe from '../hooks/useMe'

const PrivateRoute = () => {
  const { data, isLoading } = useMe()
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-5xl" />
      </div>
    )
  }
  if (!data) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
export default PrivateRoute
