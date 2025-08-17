import  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { IoBookOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCoins } from "react-icons/fa6";
import { logout } from "../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const [users,setUsers] = useState("https://cdn-icons-png.flaticon.com/512/149/149071.png")
   useEffect(() => {
      const savedImg = localStorage.getItem("user_img");
      if (savedImg) {
        setUsers(savedImg);
      }
    }, [logout]); 
  


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const signUpUser = ()=>{
    navigate('/register')
  }
  const loginUser = ()=>{
    navigate('/login')
  }

    const isAuthenticated = localStorage.getItem("currentUser");
    const user = JSON.parse(isAuthenticated)
  
  return (
    <>
      <nav className="bg-white w-full  shadow-md px-4 py-3">
        <div className=" flex justify-between items-center">
          {/* Nav Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="text-blue-600 w-6 h-6" />
            <span className="text-xl font-bold text-gray-900">
              Brain Booster
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="md:hidden hidden lg:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Home
            </NavLink>

            <NavLink
              to="/quizze"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Quizzes
            </NavLink>

            <NavLink
              to="/subjects"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <PiGraduationCap /> Subject
            </NavLink>

            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaTrophy /> Leaderboard
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaBlog /> Blog
            </NavLink>

            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <VscGraph /> MyProgress
            </NavLink>
          </div>


          <div className="md:hidden hidden lg:flex items-center space-x-4 relative">
            <div className="flex item-center gap-4">
              <div className="flex item-center gap-1">
                <FaCoins className="text-yellow-400 text-xl" />
                <p>2,500</p>
              </div>
              <div className="flex items-center gap-1">
                <img onClick={() => setIsOpen1(!isOpen1)}
                  src={users}
                  alt="userIcon"
                  className="w-7 h-7 rounded-full cursor-pointer"
                />
                <p className="cursor-pointer text-gray-700 font-semibold  text-lg" onClick={() => setIsOpen1(!isOpen1)}>{user?.name || "Guest"}</p>

              </div>
            </div>
            {isOpen1 && <div>
              <div className="absolute top-full shadow-xl right-0 mt-2 bg-gray-50 p-2   rounded  flex flex-col gap-2 z-50">
                {!isAuthenticated ? <div className="w-30 mt-2 ">
                  <button className="bg-gray-100 hover:bg-gray-200 hover:border-b-2 hover:border-b-blue-500 px-4 py-1 rounded w-full cursor-pointer" onClick={signUpUser}>Sign Up</button>
                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded w-full mt-1 cursor-pointer hover:border-b-2 hover:border-b-blue-500 " onClick={loginUser}>Logn In</button>
                </div>
                  : <button
                    onClick={() => dispatch(logout(), navigate('/'))}
                    className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded cursor-pointer hover:border-b-2 hover:border-b-blue-500"
                  >
                    Logout
                  </button>}
                  <button className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded cursor-pointer hover:border-b-2 hover:border-b-blue-500 " onClick={()=>navigate('/profile')}>Profile</button>
              </div>
            </div>}
          </div>
        </div>





        {/* Mobile view */}
        {isOpen && (
          <div className="lg:hidden   flex flex-col space-y-2 mt-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Home
            </NavLink>
            <NavLink
              to="/quizze"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Quizzes
            </NavLink>
            <NavLink
              to="/subjects"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <PiGraduationCap /> Subject
            </NavLink>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaTrophy /> Leaderboard
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaBlog /> Blog
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${isActive
                  ? "text-blue-600 font-semibold border-b-2"
                  : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <VscGraph /> MyProgress
            </NavLink>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex item-center gap-1 py-1">
                <FaCoins className="text-yellow-400 text-xl" />
                <p>2,500</p>
              </div>
              <div className="flex items-center gap-1 ">
                <img
                  src={User}
                  alt="userIcon"
                  className="w-7 h-7 rounded-full "
                />
                <p>{user?.name || "Guest"}</p>
              </div>
            </div>
            <div>
                {!isAuthenticated ? <div className="w-30 mt-2">
                  <button className="bg-blue-500 text-white font-semibold hover:bg-blue-600 px-4 py-1 rounded w-full" onClick={signUpUser}>Sign Up</button>
                  <button className="bg-blue-500 text-white font-semibold hover:bg-blue-600 px-4 py-1 rounded w-full mt-1" onClick={loginUser}>Logn In</button>
                </div>
                  : <button
                    onClick={() => dispatch(logout(), navigate('/'))}
                    className="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded"
                  >
                    Logout
                  </button>}
            </div>
          </div>
        )}
      </nav>

    </>
  );
};

export default Navbar;
