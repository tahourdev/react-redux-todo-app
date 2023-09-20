import React from "react";
import Del from "../assets/del.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/todoSlice";

const TodoItem = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <ul className="w-full">
      {todos.map((todo) => (
        <>
          <li className="flex items-center py-3" key={todo.id}>
            <input
              checked={todo.completed}
              type="checkbox"
              onChange={() => handleToggleTodo(todo.id)}
              className="checkbox checkbox-warning h-4 w-4 rounded-full"
            />

            <p
              className={`${
                todo.completed ? "line-through text-clrFont/50" : ""
              } text-clrFont w-full font-light px-2`}>
              {todo.text}
            </p>

            {/* Delete */}
            <button onClick={() => handleDeleteTodo(todo.id)}>
              <img className="w-3 opacity-[50%] hover:opacity-[40%]" src={Del} alt="delete" />
            </button>
          </li>

          {/* Line */}
          <hr
            className={`${
              todo.completed ? "line-through text-clrFont/50 bg-clr3/50" : "bg-clr3/80"
            } h-[2px] mx-4 `}
          />
        </>
      ))}
    </ul>
  );
};

export default TodoItem;
