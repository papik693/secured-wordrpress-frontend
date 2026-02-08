import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-yellow-300 text-[#0B1C2D] cursor-pointer text-lg rounded-lg p-2 hover:bg-yellow-200 transition',
        className,
      )}
      type="submit"
    >
      {children}
    </button>
  )
}

export default Button
