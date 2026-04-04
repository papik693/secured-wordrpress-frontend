import { useQuery } from '@tanstack/react-query'
import type { FindingRequest } from '../types/finding'
import { api } from '../utils/api'

export const useGetFindings = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['findings'],
    queryFn: () => api.get('aws/guardduty/findings/').json<FindingRequest>(),
  })

  return { findings: data?.findings ?? [], isLoading }
}
