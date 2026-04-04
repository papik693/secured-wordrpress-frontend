import { useQuery } from '@tanstack/react-query'
import type { FindingRequest } from '../types/finding'
import { api } from '../utils/api'

export const useGetFindings = () => {
  const { data } = useQuery({
    queryKey: ['findings'],
    queryFn: () => api.get('aws/guardduty/findings/').json<FindingRequest>(),
  })

  if (data === undefined) {
    return {}
  }

  return { findings: data.findings }
}
