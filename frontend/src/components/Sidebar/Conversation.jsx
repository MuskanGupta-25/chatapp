import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation, lastIdx, emoji}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-stone-600  rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-stone-600":""}`}
    onClick={()=>setSelectedConversation(conversation)}
    >
      
      <div className={`avatar ${isOnline ? "online": ""}`}>
      <div className="w-12 rounded-full">
        <img src={conversation.profilePic} alt="user avatar" />
      </div>
      </div>
      <div className="felx flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-white">{conversation.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
    </div>
    {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
    </>
  )
}

export default Conversation


// starter code for this file
// const Conversation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center bg-orange-400 bg-opacity-0 rounded p-2 py-1 cursor-pointer " >
//       <div className="avatar online">
//       <div className="w-12 rounded-full">
//         <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//       </div>
//       </div>
//       <div className="felx flex-col flex-1">
//         <div className="flex gap-3 justify-between">
//           <p className="font-bold text-white">Arya Sin</p>
//           <span className="text-xl">💕</span>
//         </div>
//       </div>
//     </div>
//     <div className="divider my-0 py-0 h-1"/>
//     </>
//   )
// }

// export default Conversation
