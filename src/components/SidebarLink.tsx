import { NavLink, type NavLinkProps } from 'react-router'
import { cn } from '../utils/cn'

const SidebarLink = ({ className, children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'rounded-lg text-lg p-1 font-semibold flex items-center gap-3',
          isActive ? 'bg-yellow-400 text-[#0B1C2D]' : 'bg-[#141414] text-white',
          className,
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}

export default SidebarLink
