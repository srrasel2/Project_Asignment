import mongoose, { version } from 'mongoose';

const dataSchema = mongoose.Schema({
    email: {type:String, require:true, unique:true, lowercase:true, trim:true},
    password: {type:String, require:true},
    firstName: {type:String, require:true},
    lastName: {type:String, require:true},
    phone: {type:String, require:true}
},{
    timestamp: true,
    versionkey: false
});

const userModel = mongoose.model("users", dataSchema);

export default userModel;