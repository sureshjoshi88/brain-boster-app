
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Subjects from "./components/templates/Subjects";
import Blog from "./components/templates/Blog"
import ProtectedRoute from "./protectect/ProtectedRoute ";
import { BeatLoader } from "react-spinners";
import Login from "./components/templates/Login"
import MyProgress from "./data/MyProgress";
import Register from "./components/templates/Register";
import Quizzes from "./components/templates/Quizzes";
import LeaderBoardPage from "./components/templates/LeaderBoardPage";
import Layout from "./components/templates/Layout";
import Profile from "./components/templates/Profile";
import QuizeHistory from "./components/molecules/QuizeHistory";
import LiveQuize from "./components/molecules/quize/LiveQuize";
import ScheduledQuize from "./components/molecules/quize/ScheduledQuize";
const NotFound = lazy(() => import("./components/templates/NotFound"));
const Home = lazy(() => import("./components/templates/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen fw-bold">
            <div>
              <h1>
                <BeatLoader />
              </h1>
              <p className="text-lg font-semibold">Loading...</p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/progress" element={<MyProgress />} />
            <Route path='/quizze' element={<Quizzes />} >
            <Route index element={<LiveQuize/>}/>
            <Route path="live" element={<LiveQuize/>}/>
            <Route path="history" element={<QuizeHistory/>}/>
            <Route path="scheduled" element={<ScheduledQuize/>}/>
            
            </Route>
            <Route path='/profile' element={<Profile />} />
            <Route index  element={<Home />} />
            {/* Protected Routes */}
            <Route
              path="/subjects"
              element={
                <ProtectedRoute>
                  <Subjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />

            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute>
                  <LeaderBoardPage />
                </ProtectedRoute>
              }
            />

          </Route>

          {/* Open Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
