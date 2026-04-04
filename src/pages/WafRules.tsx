import Loading from '../components/Loading'
import PageTitle from '../components/PageTitle'
import { useGetRules } from '../hooks/useGetRules'

const WafRules = () => {
  const { rules, isLoading } = useGetRules()
  return (
    <div className="p-6">
      <PageTitle>WAF Rules</PageTitle>
      {isLoading && <Loading />}
      <div className="overflow-hidden bg-[#FFFFFF11] shadow sm:rounded-md">
        <ul className="divide-y divide-[#292929]">
          {rules?.map((rule) => (
            <li key={rule.name} className="p-4 hover:bg-[#0A0A0A] transition">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-400">
                    Priority {rule.priority}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {rule.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      rule.action.Block
                        ? 'bg-red-100 text-red-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {rule.action.Block ? 'BLOCK' : 'NONE'}
                  </span>
                </div>
              </div>

              {/* Detail Section */}
              <div className="mt-3 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium">Source:</p>
                  <p className="font-mono text-xs italic">
                    {rule.statement.ManagedRuleGroupStatement
                      ? 'AWS Managed Group'
                      : 'Custom Rate Limit'}
                  </p>
                </div>
                {rule.statement.RateBasedStatement && (
                  <div>
                    <p className="font-medium">Threshold:</p>
                    <p>
                      {rule.statement.RateBasedStatement.Limit} req /{' '}
                      {rule.statement.RateBasedStatement.EvaluationWindowSec}s
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WafRules
