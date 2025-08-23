import React from 'react'
import {  NavLink } from 'react-router-dom'

const QuizeButtons = () => {
    return (
        <div>
            <div className="flex justify-end">
                <div className="flex gap-6 p-2 mt-5 ">
                    <NavLink to='live'>   {({ isActive }) => (
                            <button
                                className={`p-1.5 rounded-4xl ps-3 pe-3 border cursor-pointer transition duration-300 ease-in-out 
                                ${isActive ? "bg-blue-600 text-white border-blue-600" : "border-gray-400 hover:bg-blue-600 hover:text-white"}`}
                            >
                                Live Quize
                            </button>
                        )}</NavLink>
                    <NavLink to='scheduled'> {({ isActive }) => (
                            <button
                                className={`p-1.5 rounded-4xl ps-3 pe-3 border cursor-pointer transition duration-300 ease-in-out 
                                ${isActive ? "bg-blue-600 text-white border-blue-600" : "border-gray-400 hover:bg-blue-600 hover:text-white"}`}
                            >
                                Scheduled Quize
                            </button>
                        )}</NavLink>
                    <NavLink to='history'>    {({ isActive }) => (
                            <button
                                className={`p-1.5 rounded-4xl ps-3 pe-3 border cursor-pointer transition duration-300 ease-in-out 
                                ${isActive ? "bg-blue-600 text-white border-blue-600" : "border-gray-400 hover:bg-blue-600 hover:text-white"}`}
                            >
                                History
                            </button>
                        )}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default QuizeButtons
