import { isMongoId } from "../../utils/isMongoId";

export default defineEventHandler (async (event) =>{
const id = getRouterParam(event, "id");
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