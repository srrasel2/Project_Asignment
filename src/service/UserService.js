import userModel from "../model/usersModel.js";



export const registerService = async (req, res) => {

    try {
        let reqBody = req.body;

        let data = await userModel.create(reqBody);
        return {status: true, data};
    }
    catch (error){
        return {status: false, error: error.toString()}
    }

}

export const loginService = async (req, res) => {
    try {
        let reqBody = req.body;

        let matchingStage = {
            $match : reqBody
        }

        let projectStage = {
             $project: {
                _id:1,
                email:1
             }
        }
        let data = await userModel.aggregate ([matchingStage, projectStage]);
        return {status: true, data};
    }
    catch (error) {
        return {status: false, error: error.toString()}
    }
};