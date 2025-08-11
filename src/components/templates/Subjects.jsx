import React from 'react'

function Subjects() {
   const subjects = [
  {
    id: "javascript",
    name: "JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    description: "Test your JavaScript knowledge!",
  },
  {
    id: "html",
    name: "HTML",
    image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    description: "Explore your HTML skills!",
  },
  {
    id: "react",
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    description: "Master your React fundamentals!",
  },
  {
    id: "css",
    name: "CSS",
    image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    description: "Style your knowledge with CSS!",
  },
  {
    id: "nodejs",
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    description: "Check your backend basics with Node.js!",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description: "Explore your NoSQL skills with MongoDB!",
  },
  {
    id: "expressjs",
    name: "Express.js",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    description: "How well do you know Express.js?",
  },
  {
    id: "typescript",
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    description: "Put your TypeScript typing to the test!",
  },
  {
    id: "github",
    name: "GitHub",
    image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    description: "Version control mastery starts here!",
  },
];
  return (
    <div>
      <h1>Subjects</h1>
      <div className='grid md:grid-cols-3 gap-4'>
         {subjects.map((subj) => (
              <div key={subj.id} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center mt-2">
                <img src={subj.image} alt={subj.name} className="h-20 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
                <p className="text-gray-600 mb-4">{subj.description}</p>
                {/* <button
                  onClick={() => handleStart(subj.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Start Quiz
                </button> */}
              </div>
            ))}
      </div>
    </div>
  )
}

export default Subjects