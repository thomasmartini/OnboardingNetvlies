export default defineEventHandler(async (event) => {
const body = await readBody (event)
console.log(event)
const user = await User.create(body)
return user.toObject()
})