import PageTitle from '../components/PageTitle'
import { useGetLogs } from '../hooks/useGetLogs'
import { cn } from '../utils/cn'

const Logs = () => {
  const { logs } = useGetLogs()
  const reversedLogs = [...logs].reverse()
  return (
    <div className="p-6">
      <PageTitle>Logs</PageTitle>
      <div className="border border-[#FFFFFF16] h-100 rounded-lg font-mono p-4 flex flex-col justify-end">
        {reversedLogs.reverse().map((log) => {
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
        <span className="h-5 w-1 bg-white inline-block animate-blink">
          &nbsp;
        </span>
      </div>
    </div>
  )
}

export default Logs
