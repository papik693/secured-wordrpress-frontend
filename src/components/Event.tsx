import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import type { Event as EventType } from '../types/event'

type Props = {
  event: EventType
}

const Event = ({ event }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const date = new Date(event.eventTime)
  const formattedDate = date.toLocaleString()
  return (
    <div
      key={event.eventId}
      className="grid grid-cols-2 bg-[#0A0A0A] border rounded-lg p-3 border-[#FFFFFF16] relative gap-2"
    >
      <p>Time: {formattedDate}</p>
      <p>Name: {event.eventName}</p>
      <p>Source: {event.eventSource}</p>
      {event.username && <p>Username: {event.username}</p>}
      {event.resources.length > 0 && (
        <button
          className="absolute right-4 top-3 text-3xl cursor-pointer p-2 hover:bg-[#FFFFFF16] rounded-lg transition"
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown />
        </button>
      )}
      {open && event.resources.length > 0 && (
        <div className="col-span-2 mt-2 border-t-2 border-[#FFFFFF16] divide-y-2 divide-[#FFFFFF16]">
          {event.resources.map((resource) => (
            <div
              key={resource.resourceName}
              className="grid grid-cols-2 gap-2 p-1"
            >
              <p>Resource Name: {resource.resourceName}</p>
              <p>Resource Type: {resource.resourceType}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Event
