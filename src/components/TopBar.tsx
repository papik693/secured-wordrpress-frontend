import { Link } from 'react-router'
import MobileNavbar from './MobileNavbar'
import UserMenu from './UserMenu'

const TopBar = () => {
  return (
    <div className="h-14 px-6 flex items-center justify-between border border-white/10 md:border-0">
      <Link to="/" className="font-medium text-xl">
        <span className="text-yellow-400">Wordpress</span> Security
      </Link>
      <div className="flex items-center gap-2 justify-center">
        <UserMenu />
        <MobileNavbar />
      </div>
    </div>
  )
}

export default TopBar
