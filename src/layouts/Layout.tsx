import { Outlet } from 'react-router'
import ChatWidget from '../components/ChatWidget'
import NavBar from '../components/NavBar'
import TopBar from '../components/TopBar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col bg-[#0A0A0A]">
        <TopBar />
        <NavBar />
      </div>
      <main className="flex-1 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}

export default Layout
