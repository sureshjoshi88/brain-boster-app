
import { useDispatch, useSelector } from "react-redux"
import { nextQuestion, preQuestion, resetquize, checkAnswer, resetIsFinished } from "../../redux/reducers/quizeSlice";
import { useTimer } from "react-timer-hook";
import { MdOutlineWatchLater } from "react-icons/md";
import { useState } from "react";
import questions from "../../data/Question";




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

  const [starts, setStarts] = useState(false);
  const [subject, setSubject] = useState("javascript");
  const [level, setLevel] = useState("easy"); // default difficulty

  const handleStart = (selectedSubject) => {
    setSubject(selectedSubject);
    setStarts(true);
  };
  //   const dispatch = useDispatch();
  //   const { question, score, currentIndex, selectedOptions, isFinished } = useSelector((state) => state.quize)

  //   const currentQuestion = question[currentIndex]

  //   const handleoptionClick = (option) => {
  //     dispatch(checkAnswer(option))
  //   }

  //   const [quizestart, setQuizestart] = useState(false)

  //   const time = new Date();
  //   time.setMinutes(time.getMinutes() + 5); // 5 minutes
  //   const {
  //     seconds,
  //     minutes,
  //     start,
  //     restart
  //   } = useTimer({
  //     expiryTimestamp: time,
  //     autoStart: false,
  //     onExpire: () => {
  //       // dispatch(resetquize())
  //       dispatch(resetIsFinished())
  //     },
  //   });


  // const startTime = ()=>{
  //     const time = new Date();
  //     time.setMinutes(time.getMinutes() + 5);
  //     restart(time);
  //     setQuizestart(true);
  // }
  // const resetTime = ()=>{
  //     const time = new Date();
  //     time.setMinutes(time.getMinutes() + 5);
  //     restart(time);
  //     setQuizestart(false);
  // }

  console.log(questions[subject][level], "clg")

  return (
    <div>

      {starts === false ? <div className='grid md:grid-cols-3 gap-4'>
        {subjects.map((subj) => (
          <div key={subj.id} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center mt-2">
            <img src={subj.image} alt={subj.name} className="h-20 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{subj.name}</h2>
            <p className="text-gray-600 mb-4">{subj.description}</p>
            <button
              onClick={() => handleStart(subj.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Start Quiz
            </button>
          </div>
        ))}
      </div>
        :
       <div className="flex justify-center items-center mt-6">
         <div className="bg-gray-50 shadow-2xl p-3 rounded">
          {questions[subject][level].map((opt, index) => (
            <div key={index}>
              <p className="font-medium text-xl ps-4">{opt.question}</p>
              {opt.options.map((opt, ind) => (
                <button key={ind} className="border p-2 rounded-full w-100 flex font-semibold m-3 hover:bg-green-100 cursor-pointer">{opt}</button>

              ))}
            </div>
          )
          )}
        </div>
        </div>
        }

      <div>
        {/* 
       {quizestart===false&& <div>
          <div className="pt-4 flex justify-center ">
            <button onClick={()=>setQuizestart(true,startTime())} className="bg-blue-600 px-5 py-2 rounded text-white cursor-pointer font-semibold">Start quize</button>
          </div>
        </div>}

       { quizestart===true&&<div>
          <div>
            {!isFinished ? <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-2xl mt-1">
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
                <p className="font-medium mb-2 ">Question {currentIndex + 1} of {question.length}</p>
                <div className="w-50 bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full " style={{ width: `${((currentIndex + 1) / question.length) * 100}%` }}
                  ></div>
                </div>
              </div>


              <h3 className="text-xl mb-2 font-medium">
                Q{currentIndex + 1}: {currentQuestion.question}
              </h3>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleoptionClick(option)}
                    className={`flex  w-full px-4 py-3 border font-semibold ${selectedOptions[currentIndex] === option
                      ? "border-blue-600 border-2 rounded"
                      : "rounded border-gray-300"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

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
                  // disabled={currentIndex === question.length - 1}
                  className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded"
                >
                  Next
                </button>
              </div>

            </div> : <div className="p-4 max-w-md mx-auto text-center font-medium">
              <h2 className="text-2xl font-bold mb-4">🎉 Quiz Completed! 🎉</h2>
              <p className="text-lg mb-2">Your Score: {score} / {question.length}</p>
              <button
                onClick={() => dispatch(resetquize(),resetTime())}
                className="px-4 py-2 bg-blue-600 text-white rounded font-medium"
              >
                Restart Quiz
              </button>
            </div>}
          </div>
        </div>} */}

      </div>
    </div>

  )
}

export default Quizzes
