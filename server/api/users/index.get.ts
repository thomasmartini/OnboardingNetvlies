export default defineEventHandler(async (event) => {
handler: async() => {
    return User.find()
}
  });