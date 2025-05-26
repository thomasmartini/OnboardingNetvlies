export default defineEventHandler(async (event) => {
const body = await readBody (event)
const user = await User.create(body)
return user.toObject()
})