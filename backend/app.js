import express from 'express'
import cors from 'cors'
import dotevn from 'dotenv'
dotevn.config()


const app = express()


app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(process.env.PORT,()=>console.log(`Server has been start on ${process.env.PORT}`));