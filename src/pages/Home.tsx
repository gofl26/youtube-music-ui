import React, { useState } from "react";

const Home: React.FC = () => {
  const [a, seta] = useState("");
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <h1 className="text-4xl font-bold">Utube 저장소</h1>
      <div className="flex flex-col items-center gap-4"></div>
    </div>
  );
};

export default Home;
