import { useState } from "react";

function TodoItem({ todoText, checked = false }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  if (!todoText) {
    return null; // or you can return a placeholder item
  }
  return (
    <li className="flex items-center p-2 bg-white rounded shadow  gap-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`flex justify-between items-center w-full ${
          isChecked ? "line-through text-gray-500" : ""
        }`}
      >
        <span>{todoText}</span>
        <p className="relative bottom-1">...</p>
      </div>
    </li>
  );
}

export default TodoItem;
