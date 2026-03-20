import PageTitle from '../components/PageTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import useMe from '../hooks/useMe'

const Home = () => {
  const { me } = useMe()
  useDocumentTitle('Home')

  return (
    <div className="p-6">
      <PageTitle>Home</PageTitle>
      <p>{me?.id}</p>
      <p>{me?.email}</p>
      <p>{me?.username}</p>
    </div>
  )
}

export default Home
