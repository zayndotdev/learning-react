import React, { useEffect, useState } from "react";

function MyComp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`MyComp mounting`);

    return () => {
      console.log(`MyComp unmounting`);
    };
  }, []);
  useEffect(() => {
    console.log(`counnt updated: ${count}`);
  }, [count]);
  return (
    <div>
      <h1 className="text-4xl text-white">useEffect Basics</h1>
      <h2 className="text-2xl text-white mt-4">Count: {count}</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>

      {/* div for my comp */}
      <div className="mt-8">
        <h2 className="text-2xl text-white">MyComp:</h2>
      </div>
      <p className="text-white">Check the console for MyComp logs.</p>
      <p className="text-white">Click the button to see App logs.</p>
      <p className="text-white">MyComp will log on every render.</p>
      <p className="text-white">
        App will log on every render and on count change.
      </p>
    </div>
  );
}

export default MyComp;
