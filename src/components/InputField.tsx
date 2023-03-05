interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleSubmit }: Props) => {
  return (
    <>
      <form className="field" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a task"
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};
