import { useState } from 'react'
import { FaHouse, FaUser } from 'react-icons/fa6'
import { FiActivity } from 'react-icons/fi'
import { HiMenu, HiX } from 'react-icons/hi'
import { LuHistory, LuShield } from 'react-icons/lu'
import { MdRule } from 'react-icons/md'
import NavbarLink from './NavbarLink'

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="flex md:hidden relative">
      {' '}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center rounded-md text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
      >
        {isOpen ? (
          <HiX className="text-2xl" />
        ) : (
          <HiMenu className="text-2xl" />
        )}
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed bottom-0 left-0 w-full md:absolute md:bottom-auto md:left-auto md:right-0 md:top-full md:mt-2 md:w-56 rounded-xl bg-[#111] border border-white/10 shadow-2xl py-2 z-20 overflow-hidden">
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
        </>
      )}
    </div>
  )
}
export default MobileNavbar
