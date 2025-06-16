import AddTodoBtn from "./AddTodoBtn";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

function Todo() {
  return (
    <div className="flex flex-col items-center justify-center max-w-1/4 w-full bg-gray-100 rounded-lg shadow-lg p-4">
      <TodoHeader />

      <ul className="w-full list-none p-0 flex flex-col gap-2 overflow-y-auto max-h-60 ">
        <TodoItem todoText={"Finish React project by June 20th"} />
        <TodoItem todoText={"Push final code to GitHub"} />
        <TodoItem todoText={"Prepare resume with latest projects"} />
        <TodoItem todoText={"Apply to 3 MERN internships today"} />
        <TodoItem todoText={"Solve 2 DSA problems on LeetCode"} />
      </ul>

      <AddTodoBtn />
    </div>
  );
}

export default Todo;
