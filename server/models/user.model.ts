import { defineMongooseModel } from '#nuxt/mongoose'

export const User = defineMongooseModel({
  name: 'User',
  schema: {
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password:{
      type: 'string',
      required: true,
      minlength: 8,

    },
    name:{
      type: 'string',
      required: true
    },
    role: {
      type: 'string',
      required: true
    },
    progress: {
      type: "number",
      default: 0,
      required: false,
      
    }
  },
  options: {
  },
  hooks(schema) {

  },
})