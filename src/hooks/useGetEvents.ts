import { useQuery } from '@tanstack/react-query'
import { type EventResponse } from '../types/event'
import { api } from '../utils/api'

export const useGetEvents = () => {
  const { data } = useQuery({
    queryFn: () => api.get('aws/cloudtrail/events').json<EventResponse>(),
    queryKey: ['events'],
  })

  if (data === undefined) {
    return {}
  }

  return { events: data.events }
}
