import z from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.email(),
})

export type ForgotPasswordShemaType = z.infer<typeof forgotPasswordSchema>
