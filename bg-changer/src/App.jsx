import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("bg-neutral-950");
  const btnStyles =
    " text-white px-4 py-2 rounded-full  transition-colors cursor-pointer";
  const colorClasses = {
    red: "bg-red-700",
    blue: "bg-blue-700",
    neutral: "bg-neutral-700",
    green: "bg-green-700",
    yellow: "bg-yellow-700",
    gray: "bg-gray-700",
  };
  const colors = Object.keys(colorClasses);

  const changeBgColor = (color) => {
    const newColor = colorClasses[color];
    newColor ? setBgColor(newColor) : setBgColor("bg-neutral-950");
  };
  return (
    <div
      className={`flex items-center justify-center h-screen w-full transition-all duration-300 ${bgColor}`}
    >
      <h1 className="text-white text-4xl font-bold">
        Welcome to the Background Changer App!
      </h1>
      <div className="bg-gray-200 max-w-5/6 absolute bottom-10 left-[50%] translate-x-[-50%]  w-full flex items-center justify-center mx-auto p-4 gap-4 rounded-2xl ">
        {colors.map((color) => {
          return (
            <button
              key={color}
              className={`${btnStyles} ${colorClasses[color]}`}
              onClick={() => {
                changeBgColor(color);
              }}
              title={`Set background to ${color} color`}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
