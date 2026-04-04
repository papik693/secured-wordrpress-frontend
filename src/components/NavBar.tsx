import { FaHouse, FaUser } from 'react-icons/fa6'
import { FiActivity } from 'react-icons/fi'
import { LuHistory, LuShield } from 'react-icons/lu'
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
      <NavbarLink to="/waf-rules">
        <MdRule /> WAF Rules
      </NavbarLink>
      <NavbarLink to="/waf-logs">
        <FiActivity /> WAF Logs
      </NavbarLink>
      <NavbarLink to="/cloudtrail-events">
        <LuHistory /> Cloudtrail Events
      </NavbarLink>
      <NavbarLink to="/guardduty-findings">
        <LuShield /> Guardduty Findings
      </NavbarLink>
    </div>
  )
}

export default NavBar
