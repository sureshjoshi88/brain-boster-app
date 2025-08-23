import React from 'react'
import { useSelector } from 'react-redux';
import QuizeButtons from './QuizeButtons';

const QuizeHistory = () => {
  const history = useSelector((state) => state.quize.completedQuizzes);

  

 

  return (
    <>
  { history.length===0? <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">No quiz history found ❌</p>
      </div>
      : <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">📜 Quiz History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Subject</th>
            <th className="border border-gray-300 p-2">Difficulty</th>
            <th className="border border-gray-300 p-2">Score</th>
            <th className="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{item.subject}</td>
              <td className="border border-gray-300 p-2">{item.difficulty}</td>
              <td className="border border-gray-300 p-2">{item.score}</td>
              <td className="border border-gray-300 p-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>}
    </>
  );
};
export default QuizeHistory
