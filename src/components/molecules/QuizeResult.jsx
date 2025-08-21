import React from 'react'

const QuizeResult = () => {
  return (
    <div>
         <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed! 🎉</h2>
                        <p className="text-lg mb-2">Your Score: {score} / {currentArray.length}</p>
                        <div className="flex justify-between ">
                          <button
                            onClick={() => { dispatch(resetquize()), startTime() }}
                            className="px-4 py-2 bg-blue-600 text-white rounded font-medium cursor-pointer"
                          >
                            Restart Quiz
                          </button>
                          <button
                            onClick={() => setStarts(false)}
                            className="px-4 py-2 bg-blue-600 text-white rounded font-medium cursor-pointer"
                          >
                            Back to home
                          </button>
                              {dispatch(addToHistory())}
      
                        </div>
                      </div>
    </div>
  )
}

export default QuizeResult
