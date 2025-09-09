import React, { useState } from 'react'
import { BlogData } from '../../data/DashBorddata'
import LatestfromBlog from '../molecules/dashBoard/LatestfromBlog'

const Blog = () => {
  const [form,setForm] = useState({title:"",heading:"",description:"",img:""});
  const [formstate,setFormstate] = useState(false)
  
  const handleForm = (e)=>{
    e.preventDefault()
    console.log(form);
    setForm({title:"",heading:"",description:"",img:""})

  }
  
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

 
  return (
    <div>
        <div>
            <button onClick={()=>setFormstate((pre)=>!pre)} className='ps-2 pe-2 p-1 rounded bg-blue-500 text-white font-semibold m-3 cursor-pointer'>Add Blog</button>
        </div>
       
      <div>
        
      {formstate&&  <div>
            <form className='flex justify-center' onSubmit={handleForm}>
              <div className='shadow-2xl shadow-gray-300 p-4 rounded space-y-4'>
                  <input className='border w-100 rounded-full p-2 outline-0'  value={form.title} onChange={handleChange} required type="text" name="title" id="title"  placeholder='Enter your title'/><br/>
                <input className='border w-100 rounded-full p-2 outline-0' value={form.heading}  onChange={handleChange} required type="text" name="heading" id="title"  placeholder='Enter your heading'/><br/>
                <input className='border w-100 rounded-full p-2 outline-0' value={form.img}  onChange={handleChange} required type="file" name="img" id="title"  placeholder='Enter your title'/><br/>
                <input className='border w-100 rounded-full p-2 outline-0' value={form.description}  onChange={handleChange} required name="description" id="" placeholder='Enter your description' ></input><br/>
                <button className='text-white font-semibold rounded-full bg-blue-500 w-100 p-2' >Submit</button>
              </div>
            </form>
        </div>}

         <div className="p-4 mt-4  rounded-1">
                            <h2 className="text-xl font-bold mb-4">Latest from Blog</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
