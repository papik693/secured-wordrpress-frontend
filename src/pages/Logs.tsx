import clsx from 'clsx'
import PageTitle from '../components/PageTitle'
import { useGetLogs } from '../hooks/useGetLogs'

const Logs = () => {
  const { logs } = useGetLogs()
  return (
    <div className="p-6">
      <PageTitle>Logs</PageTitle>
      <div className="border border-[#FFFFFF16] h-100 rounded-lg font-mono p-4 flex flex-col justify-end">
        {logs.map((log) => {
          const formatLog = `[${log['@timestamp']}] ${log.method} ${log.clientIp} ${log.country} ${log.action} ${log.terminatingRuleId} ${log.terminatingRuleType}`
          return (
            <p
              key={log['@timestamp']}
              className={clsx(
                log.action === 'BLOCK' && 'text-red-500',
                'text-sm',
              )}
            >
              {formatLog}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Logs
