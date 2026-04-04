import { useQuery } from '@tanstack/react-query'
import type { LogsRequest } from '../types/log'
import { api } from '../utils/api'

export const useGetLogs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['logs'],
    queryFn: () => api.get('aws/waf/logs/').json<LogsRequest>(),
  })

  return { logs: data?.results ?? [], isLoading }
}
