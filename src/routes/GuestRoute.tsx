import { Navigate, Outlet } from 'react-router'
import useMe from '../hooks/useMe'

const GuestRoute = () => {
  const { data, isLoading } = useMe()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (data) {
    return <Navigate to="/" />
  }
  return <Outlet />
}

export default GuestRoute
