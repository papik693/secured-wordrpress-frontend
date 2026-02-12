import { Link } from 'react-router'
import UserMenu from './UserMenu'

const TopBar = () => {
  return (
    <div className="h-14 px-6 flex items-center justify-between">
      <Link to="/" className="font-medium text-xl">
        <span className="text-yellow-400">Wordpress</span> Security
      </Link>

      <UserMenu />
    </div>
  )
}

export default TopBar
