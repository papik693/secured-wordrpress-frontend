import Loading from '../components/Loading'
import PageTitle from '../components/PageTitle'
import { useGetLogs } from '../hooks/useGetLogs'
import { cn } from '../utils/cn'

const WafLogs = () => {
  const { logs, isLoading } = useGetLogs()
  const reversedLogs = [...logs].reverse()
  return (
    <div className="p-6">
      <PageTitle>WAF Logs</PageTitle>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="border border-[#FFFFFF16] h-100 rounded-lg font-mono p-4 flex flex-col justify-end">
          {reversedLogs.length > 0 &&
            reversedLogs.map((log) => {
              const formatLog = `[${log['@timestamp']}] ${log.action} ${log.method} ${log.clientIp} ${log.country}  ${log.terminatingRuleId} ${log.terminatingRuleType}`
              return (
                <p
                  key={log['@timestamp']}
                  className={cn(
                    log.action === 'BLOCK' && 'text-red-700',
                    'text-sm',
                  )}
                >
                  {formatLog}
                </p>
              )
            })}
          {isLoading === false && reversedLogs.length === 0 && (
            <p>No Logs Found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default WafLogs
