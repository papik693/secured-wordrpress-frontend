import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import Input from '../components/Input'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import {
  resetPasswordSchema,
  type ResetPasswordSchemaType,
} from '../schemas/resetPasswordSchema'
import { api } from '../utils/api'

const ResetPassword = () => {
  useDocumentTitle('Reset Password')
  const { userId, token } = useParams()
  const navigate = useNavigate()
  const methods = useForm<ResetPasswordSchemaType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  })

  const submitHandler = async ({ password }: ResetPasswordSchemaType) => {
    const { message } = await api
      .post(`user/reset-password/`, {
        json: { password, uid: userId, token },
      })
      .json<{ message: string }>()
    toast(message)
    navigate('/login')
  }

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
        Reset Password
      </h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className="flex flex-col gap-5"
        >
          <Input
            label="Password"
            name="password"
            placeholder="******"
            type="password"
            className="w-60 sm:w-80"
          />

          <Button isLoading={methods.formState.isSubmitting}>
            Change Password
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default ResetPassword
