import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");

      // Update local storage with the updated list of todos
      localStorage.setItem(
        "todos",
        JSON.stringify([...todos, { id: Date.now(), text: newTodo, completed: false }])
      );
    }
  };

  return (
    <>
      <div className="w-full flex my-4">
        <input
          className="md:max-w-none w-full py-2 px-6 bg-clr1 rounded-l-[2rem] outline-none"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button
          onClick={handleAddTodo}
          className="bg-clr3 uppercase hover:bg-clr3/70 font-semibold px-3 rounded-r-[2rem] text-clr2">
          Add
        </button>
      </div>
    </>
  );
};
