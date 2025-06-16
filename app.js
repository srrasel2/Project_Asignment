import express from 'express';
import cors from 'cors';
import ratelimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoose from 'mongoose';
import cookieparser from 'cookie-parser';
import { DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE } from './src/config/config.js';
import router from './src/routes/api.js';



const app= express();

//App use Default Middleware

app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE}));
app.use(helmet());
app.use(cookieparser());



const limiter = ratelimit({ windowMs: REQUEST_TIME, ma: REQUEST_NUMBER});
app.use(limiter);

//cache
app.set('etag', WEB_CACHE)


//Database  

mongoose.connect(DATABASE, { autoIndex:true}).then(() => {
    console.log("MongoDb connected successfully");
}).catch(() => {
    console.log("MongoDB Disconnect");
})





//Routes

app.use("/app/v1", router);

app.listen(PORT, () => {
    console.log("Server Successfully Run " + PORT);
})








