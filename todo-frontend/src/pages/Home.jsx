import { useState } from "react";
import StatsCard from "../components/cards/StatsCard";


const Home = () => {

  return (
    <div className="p-6 pb-0 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Tasks"
          count={12}
          color="bg-blue-50"
          icon="📘"
        />

        <StatsCard title="Completed" count={8} color="bg-green-50" icon="✔️" />

        <StatsCard t itle="Pending" count={4} color="bg-purple-100" icon="📂" />
      </div>
    </div>
  );
};

export default Home;
