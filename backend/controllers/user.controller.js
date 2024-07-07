import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id

        //to get all the user on sidebar we user this all user means the login one also means to chat yourself
        // const allUsers = await User.find()

        // to get all the user except the login in one we do filter
        const filterUsers = await User.find({id: {$ne:loggedInUserId}}).select("-password").select("-createdAt").select("-updatedAt")
        res.status(200).json(filterUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message)
        res.status(500).json({error: "Internal server error"})
    }
};