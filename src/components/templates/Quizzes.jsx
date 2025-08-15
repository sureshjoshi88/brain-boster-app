import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useTimer } from "react-timer-hook";
import { MdOutlineWatchLater } from "react-icons/md";
import {
  nextQuestion,
  preQuestion,
  resetquize,
  checkAnswer,
  resetIsFinished,
  setSubject,
  setDifficulty
} from "../../redux/reducers/quizeSlice";





const Quizzes = () => {

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

  const dispatch = useDispatch();

  const {
    questionsData,
    currentSubject,
    currentDifficulty,
    currentIndex,
    score,
    selectedOptions,
    isFinished,
  } = useSelector((state) => state.quize);

  const [starts, setStarts] = useState(false);

  

  const handleStart = (selectedSubject) => {
    if(questionsData[selectedSubject]){
      dispatch(setSubject(selectedSubject));
      setStarts(true);
      const newTime = new Date();
      newTime.setMinutes(newTime.getMinutes() + 1);
      restart(newTime);
    }else{
      alert("the subject quize not presnt")
    }
  };

  const handleLevelChange = (level) => {
    dispatch(setDifficulty(level));
  };

  const currentArray = questionsData[currentSubject][currentDifficulty];
  const currentQ = currentArray[currentIndex];




  const time = new Date();
  time.setMinutes(time.getMinutes() + 1); // 5 minutes
  const {
    seconds,
    minutes,
    start,
    restart
  } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      dispatch(resetIsFinished())

    },
  });


  const startTime = () => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + 1);
    restart(time);
  }
  // const resetTime = () => {
  //   const time = new Date();
  //   time.setMinutes(time.getMinutes() + 1);
  //   restart(time);
  //   setQuizestart(false);
  // }

  return (

    <div>

      <div>
        {!starts ? (
          <div className='grid md:grid-cols-3 gap-4'>
            {subjects.map((subj) => (
              <div key={subj.id} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center mt-2">
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
        ) : (
          <div className="flex justify-center items-center mt-6">



            <div className="bg-gray-50 shadow-2xl p-5 rounded max-w-lg w-full">
              {!isFinished ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h1 className="text-2xl font-bold">Science</h1>
                      <p className="text-sm text-gray-500">Calculus Basics Quiz</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-lg flex items-center gap-1">
                        <span><MdOutlineWatchLater /></span>
                        <div>
                          <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-yellow-500">
                        💰 100
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 flex  justify-between w-full items-center">
                    <p className="font-medium mb-2 ">Question {currentIndex + 1} of {currentArray.length}</p>
                    <div className="w-50 bg-gray-200 h-2 rounded-full">
                      <div className="bg-blue-600 h-2 rounded-full " style={{ width: `${((currentIndex + 1) / currentArray.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="font-medium text-xl mb-4">
                    Q{currentIndex + 1}: {currentQ.question}
                  </p>
                  {currentQ.options.map((opt, ind) => (
                    <button
                      key={ind}
                      onClick={() => dispatch(checkAnswer(opt))}
                      className={`border p-2 rounded-full w-full font-semibold my-2
                      ${selectedOptions[currentIndex] === opt ? "bg-blue-500 text-white" : "hover:bg-blue-400 hover:text-white"}`}
                    >
                      {opt}
                    </button>
                  ))}
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => dispatch(preQuestion())}
                      disabled={currentIndex === 0}
                      className="px-4 py-2 bg-gray-300 rounded"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => dispatch(nextQuestion())}
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
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
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Quizzes
