import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="text-9xl font-bold text-yellow-400 mb-5">404</h1>
      <Link
        to="/"
        className="bg-[#1A1A1A] rounded-lg px-5 font-semibold py-1 text-lg hover:opacity-60 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
