import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-orange-300'>
            SignUp
            <span className='text-red-400'> ChitChat</span>
        </h1>
        <form>
        <div>
                <label className='label p-2'>
                    <span className='text-base text-white label-text'> Fullname</span>
                </label>
                <input type='text' placeholder='Arya Sin' className='w-full bg-stone-500 input input-bordered h-10'></input>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base text-white label-text'> Username</span>
                </label>
                <input type='text' placeholder='Aryasin' className='w-full bg-stone-500 input input-bordered h-10'></input>
            </div>

            <div>
                <label className='label'>
                    <span className='text-base label-text text-white '> Password</span>
                </label>
                <input type='password' placeholder='Enter password' className='w-full bg-stone-500 input input-bordered h-10'></input>
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text text-white '> Confirm Password</span>
                </label>
                <input type='password' placeholder='Enter Confirm password' className='w-full bg-stone-500 input input-bordered h-10'></input>
            </div>
          <GenderCheckbox/>

            <a href='#' className='text-sm text-white hover:underline hover:text-stone-500 mt-2 inline-block'>
                Already have an account?
            </a>

        <div>
           <button className='btn btn-block btn-sm mt-2 bg-stone-500 hover:bg-stone-600 text-stone-300'> SignUp </button> 
        </div>
        </form>
    </div>

</div>
  )
}

export default SignUp


//starter code for signup components
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//     <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-orange-300'>
//             SignUp
//             <span className='text-red-400'> ChitChat</span>
//         </h1>
//         <form>
//         <div>
//                 <label className='label p-2'>
//                     <span className='text-base text-white label-text'> Fullname</span>
//                 </label>
//                 <input type='text' placeholder='Arya Sin' className='w-full bg-stone-500 input input-bordered h-10'></input>
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base text-white label-text'> Username</span>
//                 </label>
//                 <input type='text' placeholder='Aryasin' className='w-full bg-stone-500 input input-bordered h-10'></input>
//             </div>

//             <div>
//                 <label className='label'>
//                     <span className='text-base label-text text-white '> Password</span>
//                 </label>
//                 <input type='password' placeholder='Enter password' className='w-full bg-stone-500 input input-bordered h-10'></input>
//             </div>
//             <div>
//                 <label className='label'>
//                     <span className='text-base label-text text-white '> Confirm Password</span>
//                 </label>
//                 <input type='password' placeholder='Enter Confirm password' className='w-full bg-stone-500 input input-bordered h-10'></input>
//             </div>
//           <GenderCheckbox/>

//             <a href='#' className='text-sm text-white hover:underline hover:text-stone-500 mt-2 inline-block'>
//                 Already have an account?
//             </a>

//         <div>
//            <button className='btn btn-block btn-sm mt-2 bg-stone-500 hover:bg-stone-600 text-stone-300'> SignUp </button> 
//         </div>
//         </form>
//     </div>

// </div>
//   )
// }

// export default SignUp