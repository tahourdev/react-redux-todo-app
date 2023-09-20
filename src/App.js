import React from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[500px] mx-auto my-10">
        <TodoList />
      </div>
      <Footer />
    </>
  );
}

export default App;
