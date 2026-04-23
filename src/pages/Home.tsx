import { useDocumentTitle } from '../hooks/useDocumentTitle'

const Home = () => {
  useDocumentTitle('Home')

  return (
    <div className="p-6">
      <h1 className="text-5xl text-center font-semibold">
        <span className="text-yellow-400">Wordpress</span> Security
      </h1>
      <p className="text-center mt-10 text-lg">
        Real-time insights and monitoring for your cloud infrastructure
      </p>
    </div>
  )
}

export default Home
