import express from "express";
import * as blogController from "../controllers/BlogConcroller.js"; 
import * as UserController from "../controllers/UserController.js";
const router = express.Router();



//create blog api
router.post('/create-blog', blogController.CreateBlogController); 

//Read blog api
router.get('/read-blog/:blogid', blogController.readBlogWithCommentController);

//register api
router.post("/register", UserController.UserController);

//log in api
router.post("/login", UserController.loginController);



export default router  