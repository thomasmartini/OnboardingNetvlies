import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})
export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)
  const response = await fetch(`http://localhost:3000/api/users/${email}`)
  const data = await response.json()
  if (email === data.email && await verifyPassword(data.password, password)) {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module

    await setUserSession(event, {
      user: {
        name: data.name,
        role: data.role,
        photo: data.photo
      }
    })
    return {}
  }
})