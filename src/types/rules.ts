export type RulesResponse = {
  ok: string
  source: string
  region: string
  generatedAt: string
  webAcl: {
    name: string
    id: string
    arn: string
    defaultAction: { Allow: {} }
    capacity: number
    description: string
  }
  rules: Rule[]
}

interface ManagedRuleGroupStatement {
  VendorName: string
  Name: string
}
type AggregateKeyType = 'IP' | 'FORWARDED_IP' | 'CUSTOM_KEYS' | 'CONSTANT'
interface RateBasedStatement {
  Limit: number
  EvaluationWindowSec: number
  AggregateKeyType: AggregateKeyType
}

interface Statement {
  ManagedRuleGroupStatement?: ManagedRuleGroupStatement
  RateBasedStatement?: RateBasedStatement
}

interface VisibilityConfig {
  SampledRequestsEnabled: boolean
  CloudWatchMetricsEnabled: boolean
  MetricName: string
}

type Rule = {
  name: string
  priority: number
  action: { None?: {}; Block?: {} }
  statement: Statement
  visibiltyConfig: VisibilityConfig
}
