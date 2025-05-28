import { isMongoId } from "../../utils/isMongoId";

export default defineEventHandler (async (event) =>{
const id = getRouterParam(event, "email"); //works if you give it the name email
//sends id as email param, don't know why. FIX
if(!id) throw createError({
statusCode: 404,
statusMessage: 'Not Found',
})
if(!isMongoId(id)){
    throw createError({
         statusCode: 404,
    statusMessage: 'bad id'
    })
}
const user = await User.findById(id)
if(!user) throw createError({
    statusCode: 404,
    statusMessage: 'Not Found'
})
await User.findByIdAndDelete(id)
return {message: "User deleted"}
})