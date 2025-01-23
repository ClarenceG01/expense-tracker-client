import React from "react";

const HomeShimmer = () => {
  return (
    <div className="animate-fastPulse flex flex-col gap-4">
      <div className="bg-white p-4 rounded-lg shadow-lg h-28 mb-6"></div>
      <div className="flex flex-row gap-4 ">
        <div className="bg-white p-4 rounded shadow-lg w-1/2 h-96"></div>
        <div className="bg-white p-4 shadow-lg w-1/2 h-96"></div>
      </div>
    </div>
  );
};

export default HomeShimmer;
