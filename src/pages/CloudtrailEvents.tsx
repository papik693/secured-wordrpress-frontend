import Event from '../components/Event'
import PageTitle from '../components/PageTitle'
import { useGetEvents } from '../hooks/useGetEvents'

const CloudtrailEvents = () => {
  const { events } = useGetEvents()
  return (
    <div className="p-6">
      <PageTitle>Cloudtrail Events</PageTitle>
      <div className="flex flex-col gap-5">
        {events?.map((event) => (
          <Event key={event.eventId} event={event} />
        ))}
      </div>
    </div>
  )
}

export default CloudtrailEvents
