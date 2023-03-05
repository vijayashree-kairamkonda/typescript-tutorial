import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./components/Todo";
import { TodoList } from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="App wrapper">
        <div className="heading">Todo List</div>
      </div>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
