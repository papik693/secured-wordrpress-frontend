import useMe from './hooks/useMe'

const App = () => {
  const { data } = useMe()
  return <div className="bg-black h-screen">{data?.email}</div>
}

export default App
