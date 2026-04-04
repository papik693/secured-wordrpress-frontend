export type Event = {
  eventId: string
  eventName: string
  eventTime: string
  eventSource: string
  username: string
  readOnly: string
  resources: {
    resourceType: string
    resourceName: string
  }[]
  cloudtrailEvent: string
}

export type EventResponse = {
  ok: boolean
  source: string
  region: string
  generatedAt: string
  timeRange: {
    start: string
    end: string
    minutes: number
  }
  filters: {
    limit: number
    eventName: null | string
    username: null | string
  }
  count: number
  events: Event[]
}
