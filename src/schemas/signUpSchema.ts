import z from 'zod'

export const signUpSchema = z.object({
  email: z.email(),
  username: z.string().min(4, 'Username must be longer than 4 characters'),
  password: z.string().min(1),
})

export type SignUpSchemaType = z.infer<typeof signUpSchema>
