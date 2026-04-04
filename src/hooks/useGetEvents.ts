import { useQuery } from '@tanstack/react-query'
import { type EventResponse } from '../types/event'
import { api } from '../utils/api'

export const useGetEvents = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => api.get('aws/cloudtrail/events').json<EventResponse>(),
    queryKey: ['events'],
  })

  return { events: data?.events ?? [], isLoading }
}
