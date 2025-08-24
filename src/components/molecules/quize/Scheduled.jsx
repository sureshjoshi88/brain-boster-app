import React from 'react'
import subjects from '../../../data/DummyData';

const Scheduled = () => {
    const scheduleQuize = subjects.filter((sub)=>sub.type==='scheduled')
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-4 pb-8'>
            {scheduleQuize.map((subj) => (
              <div key={subj.id} className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center text-center mt-2">
                <img src={subj.image} alt={subj.name} className="h-20 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
                <p className="text-gray-600 mb-4">{subj.description}</p>
                <div className="flex gap-8">
                  <button
                    onClick={() => handleStart(subj.id)}
                    className="bg-blue-600 cursor-pointer text-white px-4 py-1 rounded hover:bg-blue-800 transition"
                  >
                    Start Quiz
                  </button>
                  <select
                    className="border rounded h-8 p-1 border-gray-600"
                    onChange={(e) => handleLevelChange(e.target.value)}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Scheduled
