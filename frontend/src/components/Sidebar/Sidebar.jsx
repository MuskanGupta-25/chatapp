import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-stone-600 flex flex-col p-3'>
      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar


// starter code for this file
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-stone-600 flex flex-col p-3'>
//       <SearchInput/>
//       <div className='divider px-3'></div>
//       <Conversations/>
//       <LogoutButton/>
//     </div>
//   )
// }

// export default Sidebar
