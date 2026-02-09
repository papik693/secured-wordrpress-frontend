import { FaHouse, FaUser } from 'react-icons/fa6'
import { Link } from 'react-router'
import SidebarLink from './SidebarLink'

const Sidebar = () => {
  return (
    <div className="border-r-2 border-[#292929] p-5 flex flex-col gap-3">
      <Link to="/" className="font-semibold text-2xl mb-4">
        <span className="text-yellow-400">Wordpress</span> Security
      </Link>
      <SidebarLink to="/">
        <FaHouse />
        Home
      </SidebarLink>
      <SidebarLink to="/users">
        <FaUser /> Users
      </SidebarLink>
    </div>
  )
}

export default Sidebar
