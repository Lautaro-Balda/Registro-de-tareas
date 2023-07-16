import { useState } from "react";

const TaskCreator = ({ createNewTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button>Save Task</button>
    </form>
  );
};

export default TaskCreator;
