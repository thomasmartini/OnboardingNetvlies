export default defineEventHandler (async (event) =>{
const email = getRouterParam(event, "email");

if(!email) throw createError({
statusCode: 404,
statusMessage: 'Not Found',
})
const user = await User.findOne({email: email})
if(!user) throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
})
return user.toObject()
})