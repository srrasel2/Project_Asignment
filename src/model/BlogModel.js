// import { timeStamp } from "console";
import mongoose from "mongoose";
// import { type, version } from "os";


const DataChema = mongoose.Schema({
    title : {type:String, require: true},
    des : {type:String, require: true}

},
{
    timeStamp : true,
    versionKey: false,
});


const BlogModel = mongoose.model('blogs', DataChema);

export default BlogModel; 
