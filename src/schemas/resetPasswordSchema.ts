import z from 'zod'

export const resetPasswordSchema = z.object({
  password: z.string().min(8),
})

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>
