export type Log = {
  '@timestamp': string
  action: string
  clientIp: string
  uri: string
  method: string
  country: string
  terminatingRuleId: string
  terminatingRuleType: string
}

export type LogsRequest = {
  ok: boolean
  source: string
  region: string
  generatedAt: string
  logGroup: string
  timeRange: {
    start: string
    end: string
    minutes: number
  }
  filters: {
    action: string | null
    ip: string | null
    uriContains: string | null
  }
  results: Log[]
  statistics: {
    recordsMatched: number
    recordsScanned: number
    estimatedRecordsSkipped: number
    bytesScanned: number
    estimatedBytesSkipped: number
    logGroupsScanned: number
  }
}
