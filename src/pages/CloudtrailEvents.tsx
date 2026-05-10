import Event from '../components/Event'
import Loading from '../components/Loading'
import PageSubtitle from '../components/PageSubtitle'
import PageTitle from '../components/PageTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useGetEvents } from '../hooks/useGetEvents'

const CloudtrailEvents = () => {
  useDocumentTitle('Cloudtrail Events')
  const { events, isLoading } = useGetEvents()

  return (
    <div className="p-6">
      <PageTitle>Cloudtrail Events</PageTitle>
      <PageSubtitle>
        Here are the activity records tracking actions and changes made within
        your AWS environment for auditing and monitoring purposes.
      </PageSubtitle>
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
