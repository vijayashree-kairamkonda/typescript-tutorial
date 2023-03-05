import { SingleTodo } from "./SingleTodo";
import { Todo } from "./Todo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <>
      <div className="todo-container">
        {todos.map((t) => (
          <div key={t.id}>
            <SingleTodo todo={t} setTodos={setTodos} todos={todos} />
          </div>
        ))}
      </div>
    </>
  );
};
