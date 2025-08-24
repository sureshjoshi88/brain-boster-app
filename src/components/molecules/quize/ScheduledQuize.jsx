import React from 'react'
import subjects from '../../../data/DummyData';

const ScheduledQuize = () => {
    const scheduleQuize = subjects.filter((sub)=>sub.type==='scheduled')
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-4 pb-8'>
            {scheduleQuize.map((subj) => (
              <div key={subj.id} className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center mt-2">
                <img src={subj.image} alt={subj.name} className="h-20 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
                <p className="text-gray-600 mb-4">{subj.description}</p>
              </div>
            ))}
          </div>
    </div>
  )
}

export default ScheduledQuize
