function TodoItem() {
  return (
    <li className="flex items-center p-2 bg-white rounded shadow  gap-2">
      <input type="checkbox" />
      <div className="flex justify-between items-center w-full ">
        <span>Todo Item</span>
        <p className="relative bottom-1">...</p>
      </div>
    </li>
  );
}

export default TodoItem;
