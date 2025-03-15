import React, { useContext, useEffect } from "react";
import { FaUsers, FaChartPie, FaDesktop, FaChevronLeft } from "react-icons/fa";
import StatisticsCard from "./StatisticsCard";
import UsersTable from "./UsersTable";
import UserContext from "../context/UserContext";

const Statistics = () => {
  const { statistics, fetchStatistics, loading } = useContext(UserContext);

  useEffect(() => {
    fetchStatistics();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const cardDetails = [
    {
      icon: "total",
      title: "Total Users",
      value: statistics.total_users,
      change: "↑ 16% this month",
      changeColor: "text-green-500",
    },
    {
      icon: "members",
      title: "Members",
      value: statistics.active_users,
      change: "↓ 1% this month",
      changeColor: "text-red-500",
    },
    {
      icon: "status",
      title: "Active Now",
      value: statistics.active_users,
      avatars: [
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",

      ],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-10">
      <div className="flex md:flex-row flex-col gap-4 ">
        {loading?[1,2,3].map( () => (
            <div key={Math.random()} className="card w-full h-20 bg-gray-500 animate-pulse shadow-xl
            "></div>
          )
        ): cardDetails.map((card, index) => (
          <StatisticsCard key={index} {...card} className={index === 1 ? "md:border-x-1 border-gray-300" : ""} />
        ))}
      </div>

      <div>
    
      </div>
    </div>
  );
};

export default Statistics;
