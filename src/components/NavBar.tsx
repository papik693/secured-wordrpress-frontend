import { FaHouse, FaUser } from 'react-icons/fa6'
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
    </div>
  )
}

export default NavBar
