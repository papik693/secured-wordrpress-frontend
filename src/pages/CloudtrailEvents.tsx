import Event from '../components/Event'
import Loading from '../components/Loading'
import PageTitle from '../components/PageTitle'
import { useGetEvents } from '../hooks/useGetEvents'

const CloudtrailEvents = () => {
  const { events, isLoading } = useGetEvents()

  return (
    <div className="p-6">
      <PageTitle>Cloudtrail Events</PageTitle>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-5">
        {events?.map((event) => (
          <Event key={event.eventId} event={event} />
        ))}
      </div>
    </div>
  )
}

export default CloudtrailEvents
