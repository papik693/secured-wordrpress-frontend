import type { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { cn } from '../utils/cn'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Input = ({
  label,
  name,
  placeholder,
  type,
  className,
  ...props
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={cn(
          'rounded-lg p-2 text-lg bg-[#0a0a0a] border border-[#292929]',
          error && 'border-red-500',
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default Input
