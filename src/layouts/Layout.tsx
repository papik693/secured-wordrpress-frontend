import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import UserMenu from '../components/UserMenu'

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-col relative w-full p-5">
        <div className="flex w-full justify-end">
          <UserMenu />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
