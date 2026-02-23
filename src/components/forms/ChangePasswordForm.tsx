import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useChangePassword } from '../../hooks/useChangePassword'
import { useLogout } from '../../hooks/useLogout'
import useMe from '../../hooks/useMe'
import {
  changePasswordSchema,
  type ChangePasswordSchemaType,
} from '../../schemas/changePasswordSchema'
import Button from '../Button'
import Input from '../Input'

const ChangePasswordForm = () => {
  const { me } = useMe()
  const methods = useForm<ChangePasswordSchemaType>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
    resolver: zodResolver(changePasswordSchema),
  })

  const { changePassword } = useChangePassword()
  const { localLogout } = useLogout()

  const submitHandler = (data: ChangePasswordSchemaType) => {
    changePassword(
      { data, id: me?.id },
      {
        onSuccess: () => {
          localLogout()
        },
      },
    )
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <h3 className="text-lg mb-3 font-semibold">Change password</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 items-start">
          <Input label="Old Password" name="oldPassword" type="password" />
          <Input label="New Password" name="newPassword" type="password" />
          <div className="mt-9 w-full">
            <Button>Change Password</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default ChangePasswordForm
