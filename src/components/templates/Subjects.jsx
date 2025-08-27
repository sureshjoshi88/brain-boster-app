import React from 'react'
import subjects from '../../data/DummyData'

function Subjects() {

  return (
    <div>
      <h1 className='p-2 pt-3 text-center font-bold font-serif'>All Subjects</h1>
      <div className='grid md:grid-cols-3 gap-4'>
         {subjects.map((subj) => (
              <div key={subj.id} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center mt-2">
                <img src={subj.image} alt={subj.name} className="h-20 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
                <p className="text-gray-600 mb-4">{subj.description}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Subjects