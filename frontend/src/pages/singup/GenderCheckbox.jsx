import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-1 cursor-pointer`}>
                <span className='label-text text-white p-2 text-lg'>Male</span>
                <input type="checkbox" defaultChecked className="checkbox border-stone-500" />
            </label>
        </div>
        
        <div className='form-control'>
            <label className={`label gap-1 cursor-pointer`}>
                <span className='label-text text-white p-2 text-lg'>Female</span>
                <input type="checkbox" defaultChecked className="checkbox border-stone-500" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox;

// started code for gender component
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label className={`label gap-1 cursor-pointer`}>
//                 <span className='label-text text-white p-2 text-lg'>Male</span>
//                 <input type="checkbox" defaultChecked className="checkbox border-stone-500" />
//             </label>
//         </div>
        
//         <div className='form-control'>
//             <label className={`label gap-1 cursor-pointer`}>
//                 <span className='label-text text-white p-2 text-lg'>Female</span>
//                 <input type="checkbox" defaultChecked className="checkbox border-stone-500" />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox;





