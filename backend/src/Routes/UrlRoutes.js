import express from 'express'
import { getShortURl, postURL } from '../Controllers/UrlControler.js';

export const router = express.Router();



// Post Url:
router.post('/add-url',postURL);


// Get Url:
router.get('/:id',getShortURl); 