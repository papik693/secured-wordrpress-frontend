import type { ButtonHTMLAttributes } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { cn } from '../utils/cn'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const Button = ({ children, className, isLoading, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-yellow-300 w-full text-[#0B1C2D] cursor-pointer text-lg rounded-lg p-2 hover:bg-yellow-200 transition h-fit',
        className,
        isLoading && 'bg-yellow-100',
      )}
      type="submit"
    >
      {isLoading ? (
        <div className="flex items-center gap-3 w-full justify-center">
          <AiOutlineLoading3Quarters className="animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
