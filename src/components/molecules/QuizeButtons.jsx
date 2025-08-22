import React from 'react'
import { Link } from 'react-router'

const QuizeButtons = () => {
    return (
        <div>
            <div className="flex justify-end">
                <div className="flex gap-6 p-2 mt-5 ">
                    <Link to='/live'> <button className="  p-1.5 rounded-4xl ps-3 pe-3 border cursor-pointer hover:bg-blue-600 hover:text-white  border-gray-400  transition duration-300 ease-in-out">Live Quize</button></Link>
                    <Link to='/scheduled'><button className="  p-1.5 rounded-4xl ps-3 pe-3 border cursor-pointer hover:bg-blue-600 hover:text-white   border-gray-400  transition duration-300 ease-in-out">Scheduled Quize</button></Link>
                    <Link to='/history'>   <button className="  p-1.5 rounded-4xl ps-3 pe-3 border cursor-pointer hover:bg-blue-600 hover:text-white   border-gray-400  transition duration-300 ease-in-out">History</button></Link>
                </div>
            </div>
        </div>
    )
}

export default QuizeButtons
