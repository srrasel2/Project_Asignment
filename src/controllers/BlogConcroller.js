import { createBlogService} from "../service/BlogService.js";




//create blog controller
export const CreateBlogController = async (req, res)=>{
    const result = await createBlogService(req, res)
    return res.status(200).json(result)
} 


export const readBlogWithCommentController = async (req, res)=>{
    const result = await readBlogWithCommentService(req, res)
    return res.status(200).json(result) 
}  