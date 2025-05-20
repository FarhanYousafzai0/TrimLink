import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './src/Routes/UrlRoutes.js';
import connect from './src/Config/ConnectDB.js';
import colors from 'colors'
import { userRouter } from './src/Routes/UserRoutes.js';

dotenv.config(); // ✅ Corrected typo from `dotevn` to `dotenv`

const app = express();

// Connect to MongoDB
connect();

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user',userRouter);
app.use('/api/url', router);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

