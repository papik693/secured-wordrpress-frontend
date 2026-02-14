import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import useMe from '../../hooks/useMe'
import { useUpdateUser } from '../../hooks/useUpdateUser'
import {
  updateUserSchema,
  type UpdateUserSchemaType,
} from '../../schemas/updateUserSchema'
import Button from '../Button'
import Input from '../Input'

const UpdateUserForm = () => {
  const { me } = useMe()

  const methods = useForm<UpdateUserSchemaType>({
    values: {
      username: me?.username || '',
      email: me?.email || '',
    },
    resolver: zodResolver(updateUserSchema),
  })

  const { updateUser } = useUpdateUser()

  const submitHandler = (data: UpdateUserSchemaType) => {
    updateUser({ data, id: me?.id })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <h3 className="font-semibold text-lg mb-3 items-start">Update User</h3>
        <div className="grid grid-cols-3 w-full gap-5 items-end">
          <Input label="Email" name="email" type="text" />
          <Input label="Username" name="username" type="text" />
          <div className="mt-9 w-full">
            <Button>Update User</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export default UpdateUserForm
