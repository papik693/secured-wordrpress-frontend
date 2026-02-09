import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex p-5">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
