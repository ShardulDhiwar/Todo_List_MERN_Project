import React from "react";

const StatsCard = ({ title, count, color, icon }) => {
  return (
    <>
      {/* <div className={`p-6 h-50 rounded-xl shadow-md ${color}`}>
        <div className="flex item-center gap-3">
          <div className="text-2xl">{icon}</div>
          <h1 className="text-lg font-semibold mt-3">{title}</h1>
        </div>
        <p className="text-4xl font-bold mt-3 ">{count}</p>
      </div> */}
      <div className={`p-4 md:p-6 rounded-xl shadow-md ${color}`}>
        <div className="flex items-center gap-3">
          <div className="text-xl md:text-2xl">{icon}</div>
          <h1 className="text-base md:text-lg font-semibold">{title}</h1>
        </div>
        <p className="text-3xl md:text-4xl font-bold mt-3">{count}</p>
      </div>
    </>
  );
};

export default StatsCard;
