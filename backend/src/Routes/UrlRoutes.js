import express from 'express'
import { postURl } from '../Controllers/UrlControler.js';


export const router = express.Router();



// Post Url:

router.post('/add-url',postURl);


// Get Url:

