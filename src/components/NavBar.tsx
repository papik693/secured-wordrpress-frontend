import { FaHouse, FaUser } from 'react-icons/fa6'
import { FiActivity } from 'react-icons/fi'
import { MdRule } from 'react-icons/md'

import NavbarLink from './NavbarLink'

const NavBar = () => {
  return (
    <div className="h-9 px-6 flex items-center gap-6 border-b border-white/10">
      <NavbarLink to="/">
        <FaHouse />
        Home
      </NavbarLink>
      <NavbarLink to="/users">
        <FaUser /> Users
      </NavbarLink>
      <NavbarLink to="/rules">
        <MdRule /> Rules
      </NavbarLink>
      <NavbarLink to="/logs">
        <FiActivity /> Logs
      </NavbarLink>
    </div>
  )
}

export default NavBar
