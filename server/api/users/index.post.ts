export default defineEventHandler(async (event) => {
function titleCase(str: string) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   // Directly return the joined string
   return splitStr.join(' '); 
}


const body = await readBody (event)
const hashedpassword = await hashPassword(body.password)
body.password = hashedpassword
body.name = titleCase(body.name)
const user = await User.create(body)
return user.toObject()
})