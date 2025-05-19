import { nanoid } from "nanoid"


export const postURl = async(req,res)=>{

const {url} = req.body

console.log(url)

res.send(nanoid(7))


}