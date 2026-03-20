import { useQuery } from '@tanstack/react-query'
import type { RulesResponse } from '../types/rules'
import { api } from '../utils/api'

const getRules = async (): Promise<RulesResponse> => {
  const response = await api.get('aws/waf/rules/').json<RulesResponse>()
  return response
}

export const useGetRules = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['rules'],
    queryFn: getRules,
  })
  return { rules: data?.rules, isLoading }
}
