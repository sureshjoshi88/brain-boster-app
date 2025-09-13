import React, { useEffect, useRef, useState } from 'react'
import { BlogData } from '../../data/DashBorddata'
import LatestfromBlog from '../molecules/dashBoard/LatestfromBlog'

const Blog = () => {
  const [title, setTitle] = useState('')
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [formstate, setFormstate] = useState(false)
  const [array, setArray] = useState([]);
  const fileInputRef = useRef(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 string aa jayegi
      };
      reader.readAsDataURL(file);
    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    const data = {
      title,
      heading,
      description,
      image
    }

    const allblog = [...array, data];
    setArray(allblog)
    localStorage.setItem("brainblog", JSON.stringify(allblog))
    setTitle("")
    setImage("")
    setHeading("")
    setDescription("")

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setFormstate(false)

  }

  useEffect(() => {
    const allBlog = JSON.parse(localStorage.getItem("brainblog")) || [];
    console.log(allBlog);
    setArray(allBlog)
  }, []);



  return (
    <div>
      <div className='flex justify-center m-3'>
        <button onClick={() => setFormstate((pre) => !pre)} className='px-5 p-1 rounded hover:bg-blue-600 bg-blue-500 text-white font-semibold m-3 cursor-pointer'>Add Blog</button>
      </div>

      <div>

        {formstate && <div>
          <form className='flex justify-center' onSubmit={handleForm}>
            <div className='shadow-2xl shadow-gray-300 p-4 rounded space-y-4'>
              <input className='border w-120 rounded-full p-2 ' value={title} onChange={(e) => setTitle(e.target.value)} required type="text" name="title" id="title" placeholder='Enter your title' /><br />
              <input className='border w-120 rounded-full p-2 ' value={heading} onChange={(e) => setHeading(e.target.value)} required type="text" name="heading" id="" placeholder='Enter your heading' /><br />
              <input className='border w-120 rounded-full p-2 ' value={description} onChange={(e) => setDescription(e.target.value)} required name="description" id="" placeholder='Enter your description' ></input><br />
              <input className='border w-120 rounded-full p-2' ref={fileInputRef} onChange={handleImageChange} required type="file" name="img" accept="image/*"
                id="" placeholder='Enter your title' /><br />
              <button className='text-white font-semibold rounded-full bg-blue-500 w-100 p-2' >Submit</button>
            </div>
          </form>
        </div>}

        <div className="p-4 mt-4  rounded-1">
          <h2 className="text-xl font-bold mb-4">Latest from Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {array.map((item, index) => (
              <LatestfromBlog key={index} item={item} />
            ))}
            {BlogData.map((item) => (
              <LatestfromBlog key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog
