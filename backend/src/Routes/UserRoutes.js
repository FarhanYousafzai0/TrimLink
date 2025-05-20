import express from 'express'
import { LoginUser, RegisterUser } from '../Controllers/UserControler.js'


export const userRouter = express.Router()


userRouter.post('/add-user',RegisterUser);

userRouter.post('/login-user',LoginUser);
