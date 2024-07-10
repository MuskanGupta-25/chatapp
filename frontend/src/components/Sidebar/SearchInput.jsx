import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-stone-700'></input>
        <button type='submit' className='btn btn-circle bg-stone-700 hover:bg-stone-900 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}

export default SearchInput


// starter code for this file
// import { IoSearchSharp } from "react-icons/io5";
// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-stone-300'></input>
//         <button type='submit' className='btn btn-circle bg-stone-400 hover:bg-stone-300 text-white'>
//             <IoSearchSharp className="w-6 h-6 outline-none" />
//         </button>
//     </form>
//   )
// }

// export default SearchInput
