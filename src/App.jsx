import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";

function App() {
  const [taskItems, setTaskItems] = useState([
    {
      name: "Mi primer Tarea",
      done: false,
    },
    {
      name: "Mi segunda Tarea",
      done: false,
    },
    {
      name: "Mi tercer Tarea",
      done: false,
    },
  ]);

  useEffect(() => {}, [taskItems]);
  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      const newTask = {
        name: taskName,
        done: false,
      };
      setTaskItems([...taskItems, newTask]);
    } else {
      alert("¡No repitas el mismo nombre para tus tareas!");
    }
  };

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((task) => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
