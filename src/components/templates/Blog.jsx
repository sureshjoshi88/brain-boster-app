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
            <form action="">
                
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
