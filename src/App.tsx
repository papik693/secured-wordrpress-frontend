import Logout from './components/Logout'
import useMe from './hooks/useMe'

const App = () => {
  const { data } = useMe()
  return (
    <div className="bg-black h-screen">
      <p>{data?.email}</p>
      <p>{data?.username}</p>
      <Logout />
    </div>
  )
}

export default App
