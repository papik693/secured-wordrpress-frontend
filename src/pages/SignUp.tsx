import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router'
import Button from '../components/Button'
import Input from '../components/Input'
import { useSignUp } from '../hooks/useSignUp'
import { signUpSchema, type SignUpSchemaType } from '../schemas/signUpSchema'

const SignUp = () => {
  const methods = useForm<SignUpSchemaType>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const { isPending, signUp } = useSignUp()

  const submitHandler = (data: SignUpSchemaType) => {
    signUp(data)
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5 flex-col">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-5">
        Sign up to <span className="text-yellow-400">Wordpress</span> Security
      </h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitHandler)}
          className="flex flex-col gap-3"
        >
          <Input
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            className="w-60 sm:w-80"
          />
          <Input
            label="Username"
            name="username"
            placeholder="Username"
            type="text"
            className="w-60 sm:w-80"
          />
          <Input
            label="Password"
            name="password"
            placeholder="******"
            type="password"
            className="w-60 sm:w-80"
          />
          <Button className="mt-3" isLoading={isPending}>
            Sign Up
          </Button>
        </form>
      </FormProvider>
      <div className="mt-5">
        Already have an account?{' '}
        <Link to="/login" className="text-yellow-400">
          Log In
        </Link>
      </div>
    </div>
  )
}

export default SignUp
