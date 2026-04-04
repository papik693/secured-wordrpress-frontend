export type Finding = {
  id: string
  type: string
  title: string
  description: string
  severity: number
  confidence: null | number
  region: string
  accountId: string
  resourceType: string
  service: {
    serviceName: string
    archived: boolean
    count: number
    detectorId: string
    eventFirstSeeen: string
    eventLastSeen: string
  }
  createdAt: string
  updatedAt: string
  archived: boolean
}

export type FindingRequest = {
  ok: boolean
  source: string
  region: string
  generatedAt: string
  detectorId: string
  count: number
  filters: {
    limit: number | null
    severityMin: null
  }
  findings: Finding[]
}
