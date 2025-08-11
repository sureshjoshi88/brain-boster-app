import React, { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import leaderboardData from "../../data/leaderboardData";
import  Button  from "../atoms/Button";
import LeaderboardTable from "../organisms/LeaderboardTable"
import UserCard from "../molecules/dashBoard/UserCard";

const LeaderBoardPage = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

  const top3 = leaderboardData.slice(0, 3);
  const lowerUsers = leaderboardData.slice(3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <FaTrophy className="text-yellow-500 text-3xl" />
            <h1 className="text-2xl font-bold">Leaderboard</h1>
          </div>

          <div className="flex gap-2">
            {["Weekly", "Monthly", "All-time"].map((tab) => (
              <div key={tab} onClick={() => setActiveTab(tab)}>
                <Button label={tab} active={tab === activeTab} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {top3.map((user, i) => (
            <UserCard key={i} {...user} />
          ))}
        </div>
<div className="sm:overflow-x-scroll">
          <LeaderboardTable users={lowerUsers} />

</div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;