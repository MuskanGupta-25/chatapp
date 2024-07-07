import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
export const sendMessage = async (req, res) => {
    // console.log("message sent",req.params.id);
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{
                $all: [senderId,receiverId]
            },
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //socket IO functionality will go here 

        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessge controller:", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessages = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;   //userToChatId-user we bare going to chatting with means us and him/her
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: {$all:[senderId,userToChatId]},
        }).populate("messages");  //Populate allows you to replace IDs within your data with other data from Firebase. This is very useful when trying to keep your data flat. or give the msg in array one by one not refernce but a actual msg

        //optimazation by error handling
        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller:", error.message)
        res.status(500).json({ error: "Internal server error" });
    }
}