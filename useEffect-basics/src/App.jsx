import React, { useEffect, useState } from "react";
import MyComp from "./MyComp";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("APP mounting");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950">
      {isVisible ? <MyComp /> : null}

      {/* style the toggle button */}
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => setIsVisible(!isVisible)}
      >
        toggle
      </button>
    </div>
  );
}

export default App;
