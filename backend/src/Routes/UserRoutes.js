import express from 'express'
import { getProfile, LoginUser, RegisterUser } from '../Controllers/UserControler.js'
import { ProtectRoutes } from '../Middleware/AuthMiddleware.js';


export const userRouter = express.Router()


userRouter.post('/add-user',RegisterUser);

userRouter.post('/login-user',LoginUser);


userRouter.get('/profile',ProtectRoutes,getProfile);