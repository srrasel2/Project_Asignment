import mongoose from "mongoose";
import BlogModel from "../model/BlogModel.js";
const { ObjectId } = mongoose.Types;

//create blog
export const createBlogService = async (req, res)=>{

    try {
        let reqBody = req.body
        let data =await BlogModel.create(reqBody);
        return {status: true, data: data};

    }catch(error){
        return {status: false, error: error.toSring()};
    }
};


//read blog
export const readBlogWithCommentService = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.blogid); 
        let machingStage = {
            $match: { _id: id },
        };

        let joinStage = {
            $lookup:{
                from: "comments",
                localField: "_id",
                foreignField:"blogid",
                as:"comments",
            },
        };

        let data = await BlogModel.aggregate ([machingStage, joinStage]);
        return {status: true, data: data};

    }catch(error){
        return {status: false, error: error.toSring()};
    }

}