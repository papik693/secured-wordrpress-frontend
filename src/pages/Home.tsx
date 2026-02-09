import useMe from '../hooks/useMe'

const Home = () => {
  const { data: me } = useMe()
  return (
    <div>
      <p>{me?.id}</p>
      <p>{me?.email}</p>
      <p>{me?.username}</p>
    </div>
  )
}

export default Home
