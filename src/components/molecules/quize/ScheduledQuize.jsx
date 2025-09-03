import React, { useState } from 'react'
import subjects from '../../../data/DummyData';
import { BeatLoader } from 'react-spinners';

const ScheduledQuize = () => {
  const [scheduleQuize,setScheduleQuize] = useState([]);
  setTimeout(() => {
    const Quize = subjects.filter((sub)=>sub.type==='scheduled')
    setScheduleQuize(Quize)
  }, 1000);
  return (
    <div>
     {scheduleQuize.length<=0? <div className="flex justify-center items-center h-screen w-full fw-bold">
                        <div>
                          <h1>
                            <BeatLoader />
                          </h1>
                          <p className="text-lg font-semibold">Loading...</p>
                        </div>
                      </div>: <div className='grid md:grid-cols-3 gap-4 pb-8'>
            {scheduleQuize?.map((subj) => (
              <div key={subj.id} className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center mt-2">
                <img src={subj.image} alt={subj.name} className="h-20 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
                <p className="text-gray-600 mb-4">{subj.description}</p>
                <button className=' rounded bg-blue-400 px-2 p-1 text-white font-medium hover:bg-blue-500 cursor-pointer'>Upcoming Quize</button>
              </div>
            ))}
          </div>}
    </div>
  )
}

export default ScheduledQuize
