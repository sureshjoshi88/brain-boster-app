import React, { useEffect, useState } from 'react'
import { MdPhotoLibrary } from "react-icons/md";
import { MdPhotoCamera } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { FaEye } from "react-icons/fa";


const Profile = () => {
const handleInput = ()=>{
  let password = document.getElementById("inputpass")
  if(password.type==="password"){
    password.type = "text"
  }else{
     password.type = "password"
  }
}

  const [user, setUser] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png")
  useEffect(() => {
    const savedImg = localStorage.getItem("user_img");
    if (savedImg) {
      setUser(savedImg);
    }
  }, []);
  const handleimg = (e) => {
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
          <img className='h-50 w-50 rounded-full' src={user} alt="user-img" />
          <input type="file" accept='image/*' onChange={handleimg} name="" id="img" className='hidden' />
          <input
            type="file"
            accept="image/*"
            capture="user"
            id="cameraInput"
            onChange={handleimg}
            className="hidden"
          />
          <div className='add-icons'>
            <p className='rounded-full text-3xl absolute bottom-5 right-10 bg-white shadow-xl cursor-pointer '><IoAddCircle /></p>
            <div className='hidden-icons'>
              <label htmlFor="img" className='rounded-full text-2xl absolute -bottom-4 right-1 bg-white shadow-xl cursor-pointer hover:bg-gray-100 p-2'>
                <MdPhotoLibrary />
              </label>
              <label
                htmlFor="cameraInput"
                className="absolute -bottom-4 right-11 text-2xl bg-white p-2 rounded-full shadow-xl cursor-pointer hover:bg-gray-100"
              >
                <MdPhotoCamera className="text-xl text-gray-700" />
              </label>
            </div>
          </div>

        </div>
        <div className='mt-5'>
          <p className='font-medium text-xl mt-2'>Name :- {profile?.name||"guest"}</p>
          <p className='font-medium text-xl mt-2'> Email :- {profile?.email||"user@gmail.com"}</p>
          <div className='flex font-medium text-xl mt-2 gap-3'>Password :- <div className='flex gap-2   px-2 '>
             <input className='border-0 outline-0 w-28' id='inputpass'  type='password' value={profile?.password||"123456"}/>
             <button onClick={handleInput} className='  font-semibold text-lg cursor-pointer'><FaEye /></button></div></div>
        </div>
      </div>

    </div>
  )
}

export default Profile
