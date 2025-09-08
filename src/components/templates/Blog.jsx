import React from 'react'
import { BlogData } from '../../data/DashBorddata'
import LatestfromBlog from '../molecules/dashBoard/LatestfromBlog'

const Blog = () => {
  return (
    <div>
        <div>
            <button className='ps-2 pe-2 p-1 rounded bg-blue-500 text-white font-semibold m-3'>Add Blog</button>
        </div>
       
      <div>
        
        <div>
            <form className='flex justify-center'>
              <div className='shadow p-2 rounded space-y-4'>
                  <input className='border w-100' required type="text" name="" id="title"  placeholder='Enter your title'/><br/>
                <input className='border w-100' required type="text" name="" id="title"  placeholder='Enter your title'/><br/>
                <textarea className='border w-100' required name="" id=""></textarea><br/>
                <input className='border w-100' required type="file" name="" id="title"  placeholder='Enter your title'/><br/>
                <button type='submit'>Submit</button>
              </div>
            </form>
        </div>

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
