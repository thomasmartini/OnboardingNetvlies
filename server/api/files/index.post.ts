import { ServerFile } from "nuxt-file-storage";

export default defineEventHandler(async (event) => {
    const { files } = await readBody<{ files: ServerFile[] }>(event)

    for ( const file of files ) {
        
        await storeFileLocally(
            file,         // the file object
            file.name,            // you can add a name for the file or length of Unique ID that will be automatically generated!
            '/userFiles'  // the folder the file will be stored in
        ) 
        await getFileLocally(file.name, '/userFiles')
    }
    
})