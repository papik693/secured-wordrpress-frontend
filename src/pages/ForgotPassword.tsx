import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '../components/Button'
import Input from '../components/Input'
import {
  forgotPasswordSchema,
  type ForgotPasswordShemaType,
} from '../schemas/forgotPasswordSchema'
import { api } from '../utils/api'

const ForgotPassword = () => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null)

  const methods = useForm<ForgotPasswordShemaType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  const submitHandler = async ({ email }: ForgotPasswordShemaType) => {
    const { resetUrl } = await api
      .post('user/forgot-password/', { json: { email } })
      .json<{ resetUrl: string }>()

    setRedirectUrl(resetUrl)
  }

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl
    }
  }, [redirectUrl])

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
        Forgot Password
      </h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className="flex flex-col gap-5"
        >
          <Input
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            className="w-60 sm:w-80"
          />

          <Button>Send Reset Email</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default ForgotPassword
