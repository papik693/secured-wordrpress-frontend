import { FocusTrap } from 'focus-trap-react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onCancel: () => void
  onConfirm: () => void
  open: boolean
}

const Confirm = ({ children, onCancel, onConfirm, open }: Props) => {
  if (!open) {
    return null
  }
  return (
    <FocusTrap>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-700/30" />
        <div className="relative w-full max-w-md bg-black rounded-2xl p-6 shadow-xl animate">
          <h2>{children}</h2>
          <div className="flex gap-5 justify-end mt-6">
            <button
              onClick={onConfirm}
              className="cursor-pointer border-green-400 border text-green-400 hover:bg-green-400 hover:text-[#0B1C2D] transition px-4 py-2 w-full rounded-xl"
            >
              Ok
            </button>
            <button
              onClick={onCancel}
              className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white cursor-pointer px-4 py-2 w-full rounded-xl transition"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  )
}

export default Confirm
