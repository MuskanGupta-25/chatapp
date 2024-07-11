import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs,setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''   
    })

    const {loading, signup}  = useSignup();

    const handleCheckboxChange = (gender) =>{
        setInputs({
            ...inputs,gender
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await signup(inputs);
        // console.log(inputs);/
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-orange-300'>
            SignUp
            <span className='text-red-400'> ChitChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
                <label className='label p-2'>
                    <span className='text-base text-white label-text'> Fullname</span>
                </label>
                <input type='text' placeholder='Arya Sin' className='w-full bg-stone-500 input input-bordered h-10' value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}></input>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base text-white label-text'> Username</span>
                </label>
                <input type='text' placeholder='Aryasin' className='w-full bg-stone-500 input input-bordered h-10'  value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})}></input>
            </div>

            <div>
                <label className='label'>
                    <span className='text-base label-text text-white '> Password</span>
                </label>
                <input type='password' placeholder='Enter password' className='w-full bg-stone-500 input input-bordered h-10'  value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}></input>
            </div>
            <div>
                <label className='label'>
                    <span className='text-base label-text text-white '> Confirm Password</span>
                </label>
                <input type='password' placeholder='Enter Confirm password' className='w-full bg-stone-500 input input-bordered h-10' value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}></input>
            </div>
          <GenderCheckbox onCheckboxChange  = {handleCheckboxChange} selectedGender = {inputs.gender}/>

            <Link to='/login' className='text-sm text-white hover:underline hover:text-stone-500 mt-2 inline-block'>
                Already have an account?
            </Link>

        <div>
           <button className='btn btn-block btn-sm mt-2 bg-stone-500 hover:bg-stone-600 text-stone-300' disabled= {loading}> {loading ? <span className='loading loading-spinner'></span>:"Sign Up"} </button> 
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