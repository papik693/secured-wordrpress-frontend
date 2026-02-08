import { useState, type InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
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
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined
  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={name} className="text-lg">
        {label}
      </label>
      <div className="relative w-full">
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          {...register(name)}
          className={cn(
            'rounded-lg p-2 text-lg bg-[#0a0a0a] border border-[#292929] w-full',
            error && 'border-red-500',
            type === 'password' && 'pr-10',
          )}
          {...props}
        />
        {type === 'password' && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {inputType === 'password' ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default Input
