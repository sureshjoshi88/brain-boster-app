import React, { useEffect, useState } from 'react'
import { MdPhotoLibrary } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";



const Profile = () => {
  const [user,setUser] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png")
  useEffect(() => {
    const savedImg = localStorage.getItem("user_img");
    if (savedImg) {
      setUser(savedImg);
    }
  }, [handleimg]); 
    const handleimg = (e)=>{
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result; // base64 string
        setUser(base64data);
        localStorage.setItem("user_img", base64data);
      };
      reader.readAsDataURL(file); // file → base64
    }
  }

  const profile = JSON.parse(localStorage.getItem("currentUser"))

  return (
    <div className='flex justify-center items-center h-100'>

   <div>
     <div className='relative'>
      <img className='h-50 w-50 rounded-full' src={user} alt="user" />
     <input type="file" accept='image/*' onChange={handleimg} name="" id="img" className='hidden' />
      <input
            type="file"
            accept="image/*"
            capture="user"
            id="cameraInput"
            onChange={handleimg}
            className="hidden"
          />
     <label htmlFor="img" className='rounded-full text-3xl absolute bottom-0 right-1 bg-white shadow-xl cursor-pointer'><MdPhotoLibrary />
      <label
            htmlFor="cameraInput"
            className="absolute bottom-0 right-9 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100"
          >
            <MdPhotoCamera className="text-xl text-gray-700" />
          </label>
</label>

    </div>
    <div>
      <p className='font-medium text-xl mt-2'>Name :- {profile.name}</p>
      <p className='font-medium text-xl mt-2'> Email :- {profile.email}</p>
      <p className='font-medium text-xl mt-2'>Password :- {profile.password}</p>
    </div>
   </div>
      
    </div>
  )
}

export default Profile
