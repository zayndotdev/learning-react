import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

function Todo() {
  return (
    <div className="flex flex-col items-center justify-center max-w-1/4 w-full bg-gray-100 rounded-lg shadow-lg p-4">
      <TodoHeader />

      <ul className="w-full list-none p-0 flex flex-col gap-2 ">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default Todo;
