import { Navigate, Outlet } from 'react-router'

import useMe from '../hooks/useMe'



const PrivateRoute = () => {
  const { data, isLoading } = useMe()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (!data) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
export default PrivateRoute
