import React, { useState } from 'react';

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple example of a React TypeScript component with Tailwind CSS.
      </p>
      <div className="flex flex-col items-center gap-4">
        <p className="text-xl text-gray-800">Current count: {count}</p>
        <button
          onClick={incrementCount}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Home;