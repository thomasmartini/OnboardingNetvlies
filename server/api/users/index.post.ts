export default defineEventHandler(async (event) => {
const body = await readBody (event)
const hashedpassword = await hashPassword(body.password)
body.password = hashedpassword
const user = await User.create(body)
return user.toObject()
})