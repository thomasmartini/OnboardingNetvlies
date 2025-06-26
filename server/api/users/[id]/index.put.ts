import { isMongoId } from "../../utils/isMongoId";

export default defineEventHandler (async (event) =>{
const id = getRouterParam(event, "email");
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
const body = await readBody(event)
const newUser = await User.findByIdAndUpdate(id, body, {new: true})
console.log(body)
if (!newUser){
    throw createError({
        statusCode: 404,
        statusMessage: 'newUser = null'
    })
}
return newUser.toObject()
})