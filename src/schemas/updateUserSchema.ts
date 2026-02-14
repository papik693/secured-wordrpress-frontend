import z from 'zod'

export const updateUserSchema = z.object({
  email: z.email(),
  username: z.string().min(4, 'Username must be longer than 4 characters'),
})

export type UpdateUserSchemaType = z.infer<typeof updateUserSchema>
