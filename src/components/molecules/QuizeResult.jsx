import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"


const QuizeResult = (props) => {

    const dispatch = useDispatch();

    


const handleSave = () =>{
    if(props.score!==null){
     dispatch(props.addToHistory());
     alert("successfull save to history");
    }
}
  
    return (
        <div>
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed! 🎉</h2>
                <p className="text-lg mb-2">Your Score: {props.score} / {props.currentArray.length}</p>
                <div className="flex justify-between ">
                    <button
                        onClick={() => { dispatch(props.resetquize()); props.startTime() }}
                        className="px-4 py-2 bg-blue-600 text-white rounded font-medium cursor-pointer"
                    >
                        Restart Quiz
                    </button>
                    <button
                        onClick={() => props.setStarts(false)}
                        className="px-4 py-2 bg-blue-600 text-white rounded font-medium cursor-pointer"
                    >
                        Back to home
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded font-medium cursor-pointer"
                    >
                        Save to history
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizeResult
