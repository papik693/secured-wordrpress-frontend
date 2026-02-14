import z from 'zod'

export const changePasswordSchema = z.object({
  old_password: z.string().min(1),
  new_password: z.string().min(1),
})

export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>
