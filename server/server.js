import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";



const app = express();
const port = process.env.PORT || 4000 

connectDb()

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials : true}))

//API ENDPOINTS
app.get('/', (req, res)=>res.send("API WOrking Fin"));
app.use('/api/auth', authRouter);

app.listen(port, ()=> console.log(`Server started on PORT : ${port}`));

