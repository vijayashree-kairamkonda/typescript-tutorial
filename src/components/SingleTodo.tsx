import React, { useEffect, useRef, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Todo } from "./Todo";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export const SingleTodo = ({ todo, setTodos, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...todo, isDone: true } : todo))
    );
  };

  const handleDel = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((t) => (t.id === id ? { ...todo, todo: editText } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form className="todos" onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
        ) : todo.isDone ? (
          <div className="strike">{todo.todo}</div>
        ) : (
          <div>{todo.todo}</div>
        )}

        <div className="btn-container">
          <div>
            <MdEdit
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            />
          </div>
          <div>
            <MdDelete onClick={() => handleDel(todo.id)} />
          </div>
          <div>
            <TiTick onClick={() => handleDone(todo.id)} />
          </div>
        </div>
      </form>
    </>
  );
};
