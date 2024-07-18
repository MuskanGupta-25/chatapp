import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'; 
import useConversation from '../../zustand/useConversation';
const MessageContainer = () => {
  const{selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    // cleanup function (unmounte)
    return () => setSelectedConversation(null)
  },[])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
     {!selectedConversation?(<NoChatSelected/>):( <>
      <div className='bg-stone-700 px-4 py-2 mb-2'>
        <span className='label-text text-white'>To:  </span>
        <span className='text-white font-bold'>{selectedConversation.fullName}</span>
      </div>
      <Messages/>
      <MessageInput/>
      </>)}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () =>{
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
      <p>Welcome 👋 Arya Sin ❤️</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl text-center"/>  
        </div>      
    </div>
  )
}

// starter code for this file
// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti'; 
// const MessageContainer = () => {
//   const noChatSelected =true;
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//      {noChatSelected?(<NoChatSelected/>):( <>
//       <div className='bg-stone-700 px-4 py-2 mb-2'>
//         <span className='label-text text-white'>To:  </span>
//         <span className='text-white font-bold'>Arya sin</span>
//       </div>
//       <Messages/>
//       <MessageInput/>
//       </>)}
//     </div>
//   )
// }

// export default MessageContainer

// const NoChatSelected = () =>{
//   return (
//     <div className='flex items-center justify-center w-full h-full'>
//       <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
//       <p>Welcome 👋 Arya Sin ❤️</p>
//       <p>Select a chat to start messaging</p>
//       <TiMessages className="text-3xl md:text-6xl text-center"/>  
//         </div>      
//     </div>
//   )
// }