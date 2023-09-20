import React from "react";
import Clear from "../assets/clear.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
import TodoItem from "./TodoItem";
import { AddTodo } from "./AddTodo";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const completedTodos = todos.filter((todo) => todo.completed);
  const handleClearCompleted = () => {
    completedTodos.forEach((todo) => {
      dispatch(deleteTodo(todo.id));
    });
  };

  const clearClass = (completedTodos.length !== 0) === true;
  console.log(clearClass);

  return (
    <div className="w-full">
      {/* Add Todo */}
      <AddTodo />

      {/* Todo Items */}
      <div className="md:max-w-none w-full bg-clr1 rounded-[2rem] py-3 px-6">
        <TodoItem />

        {/* Clear */}
        {todos.length !== 0 && (
          <div className="pt-8 pr-2 text-sm text-right">
            <button
              onClick={handleClearCompleted}
              className={`${
                clearClass ? "cursor-pointer" : "cursor-default"
              } inline-flex items-center gap-2`}>
              <img className={`${clearClass ? "" : "opacity-[50%]"} h-4`} src={Clear} alt="clear" />
              <span className={`${clearClass ? "text-clr4" : "text-clr4/50"}  font-light`}>
                clear completed
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
