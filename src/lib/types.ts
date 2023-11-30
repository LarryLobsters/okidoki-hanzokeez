import { z } from 'zod'

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4, 'Password must be at least 10 characters long'),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don&apos;t match',
    path: ['confirmPassword']
  })

export type TSignUpSchema = z.infer<typeof signUpSchema>
