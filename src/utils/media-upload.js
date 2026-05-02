import { createClient } from "@supabase/supabase-js"

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANONKEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function fileUpload(file){
    return new Promise(
        (resolve, reject)=>{
            if(file == null){
                reject("No file selected")
                return
            }

            const timeStamp = Date.now()
            const fileName = timeStamp + "-" + file.name

            supabase.storage.from("images").upload(fileName, file, {
                upsert:false,
                cacheControl:"3600"
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                (err)=>{
                    reject(err)
                }
            )
        }
    )
}