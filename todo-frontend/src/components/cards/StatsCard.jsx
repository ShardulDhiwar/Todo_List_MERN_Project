import React from "react";

const StatsCard = ({ title, count, color, icon }) => {
  return (
    <>
      <div className={`p-4 md:p-6 rounded-xl shadow-md ${color}`}>
        <div className="flex justify-baseline items-center gap-1">
          <div className="text-xl md:text-2xl">{icon}</div>
          <h1 className="text-base  md:text-3xl font-semibold text-indigo-900">
            {title}
          </h1>
        </div>
        <p className="text-3xl text-justify md:text-4xl font-bold mt-3 text-indigo-600">
          {count}
        </p>
      </div>
    </>
  );
};

export default StatsCard;
