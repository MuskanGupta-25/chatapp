import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-orange-300'>
                    Login
                    <span className='text-red-400'> ChitChat</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-white label-text'> Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full bg-stone-500 input input-bordered h-10'></input>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white '> Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full bg-stone-500 input input-bordered h-10'></input>
                    </div>

                    <a href='#' className='text-sm text-white hover:underline hover:text-stone-500 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </a>

                <div>
                   <button className='btn btn-block btn-sm mt-2 bg-stone-500 hover:bg-stone-600 text-stone-300'> Login </button> 
                </div>
                </form>
            </div>

        </div>
    )
}

export default Login


// Starter code for login components 
// import React from 'react'

// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-orange-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-orange-300'>
//                     Login
//                     <span className='text-red-400'> ChitChat</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base text-white label-text'> Username</span>
//                         </label>
//                         <input type='text' placeholder='Enter username' className='w-full bg-stone-500 input input-bordered h-10'></input>
//                     </div>

//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text text-white '> Password</span>
//                         </label>
//                         <input type='password' placeholder='Enter password' className='w-full bg-stone-500 input input-bordered h-10'></input>
//                     </div>

//                     <a href='#' className='text-sm text-white hover:underline hover:text-stone-500 mt-2 inline-block'>
//                         {"Don't"} have an account?
//                     </a>

//                 <div>
//                    <button className='btn btn-block btn-sm mt-2 bg-stone-500 hover:bg-stone-600 text-stone-300'> Login </button> 
//                 </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Login