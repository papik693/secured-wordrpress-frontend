import z from 'zod'

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1),
  newPassword: z.string().min(1),
})

export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>
