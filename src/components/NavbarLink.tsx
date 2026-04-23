import { NavLink, type NavLinkProps } from 'react-router'
import { cn } from '../utils/cn'

const NavbarLink = ({ className, children, ...props }: NavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          'text-sm font-medium transition-colors h-full flex items-center gap-2',
          'md:h-full md:pb-3 md:border-b-2',
          'py-2 border-l-2 md:border-l-0 pl-3 md:pl-0',
          isActive
            ? ' text-white md:border-b-2 md:border-white'
            : ' text-white/60 hover:text-white border-transparent',
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
