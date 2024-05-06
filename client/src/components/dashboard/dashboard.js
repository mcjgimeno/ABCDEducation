import React from "react";
import DefaultSidebar from "./sidebar";
import withAuth from "../../helper/helper";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <DefaultSidebar />
      <div className="flex w-full flex-col">
        <div className="bg-gray-100 p-4">Dashboard</div>
        <div className="flex-1 p-4">
          qeqweqeqw
          <h1>Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);