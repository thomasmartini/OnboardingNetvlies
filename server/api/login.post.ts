import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  if (email === 'admin@admin.com' && password === 'iamtheadmin') {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: 'Thomas Martini',
        role: 'admin'
      }
    })
    return {}
  }
  if (email === 'user@user.com' && password === 'iamtheuser') {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: 'User MCuserson',
        role: 'user'
      }
    })
    return{}
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials'
  })
})