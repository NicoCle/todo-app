import { useState } from "react";

const useTask = () => {
  const [task, setTask] = useState<Task[]>([
    {
      id: 1,
      description: "Do coding challenges"
    },
    {
      id: 2,
      description: "Do coding challenges"
    },
    {
      id: 3,
      description: "Do coding challenges"
    }
  ]);

  const createTask = (description: string) => {
    const id = Math.floor(Math.random() * 1000);

    setTask((prev) => [...prev, { id, description, isCompleted: false }]);
  };

  const deleteTask = (id: number) => {
    const newTask = task.filter((item) => item.id !== id);
    task.slice(0, task.length);
    setTask(newTask);
  };

  return { task, deleteTask, createTask };
};

export default useTask;
