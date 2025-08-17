import React, { useState } from 'react'

const Profile = () => {
  const [user,setUser] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png")
  const handleimg = (e)=>{
    const file = e.target.files[0];
    if(file){
      const imgurl = URL.createObjectURL(file)
      setUser(imgurl)
    }
  }
  return (
    <div className='flex justify-center items-center h-100'>

   <div>
     <div>
      <img className='h-30 w-30' src={user} alt="user" />
     <input type="file" accept='image/*' onChange={handleimg} name="" id="" className='border rounded-full h-10 w-10' />
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
