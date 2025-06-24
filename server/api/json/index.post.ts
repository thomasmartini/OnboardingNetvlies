import fs from 'fs'
export default defineEventHandler(async (event) => {

const content = await readBody(event)

fs.writeFile('./assets/smoelenboekUsers/smoelen2.json', JSON.stringify(content, null, 4), err => {
  if (err) {
    console.error(err);
  } else {
    
  }
})

})
