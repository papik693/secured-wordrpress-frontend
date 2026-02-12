import { NavLink, type NavLinkProps } from 'react-router'
import { cn } from '../utils/cn'

const NavbarLink = ({ className, children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'text-sm font-medium transition-colors pb-3 flex items-center gap-2',
          isActive
            ? ' text-white border-b-2 border-white'
            : ' text-white/60 hover:text-white',
          className,
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}

export default NavbarLink
