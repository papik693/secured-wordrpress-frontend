import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router'
import Button from '../components/Button'
import Input from '../components/Input'
import { useLogin } from '../hooks/useLogin'
import { loginSchema, type LoginSchemaType } from '../schemas/loginSchema'

const Login = () => {
  const methods = useForm<LoginSchemaType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const { login, isPending } = useLogin()

  const submitHandler = (data: LoginSchemaType) => {
    login(data)
  }

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
        Log in to <span className="text-yellow-400">Wordpress</span> Security
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
          <Input
            label="Password"
            name="password"
            placeholder="******"
            type="password"
            className="w-60 sm:w-80"
          />
          <Link to="/forgot-password" className="hover:underline transition">
            Forgot password?
          </Link>
          <Button isLoading={isPending}>Log In</Button>
        </form>
      </FormProvider>
      <div className="mt-5">
        Don't have an account?{' '}
        <Link to="/sign-up" className="text-yellow-400">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
