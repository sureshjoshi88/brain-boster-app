import React from 'react'

const Profile = () => {
  return (
    <div className='flex justify-center items-center h-100'>

   <div>
     <div>
      <img className='h-30 w-30' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
     <input type="file" name="" id="" className='border rounded-full h-10 w-10' />
    </div>
    <div>
      <p className='font-medium text-xl'>Name</p>
      <p className='font-medium text-xl'> Email</p>
      <p className='font-medium text-xl'>Password</p>
    </div>
   </div>
      
    </div>
  )
}

export default Profile
