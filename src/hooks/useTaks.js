import { useEffect, useState } from "react";

export const useTaks = () => {
  const [tasksItems, setTaskItem] = useState([]);

  // AGREGAR UNA NUEVA TAREAS EN LA LISTA
  const createNewTask = (taskName) => {
      setTaskItem([
        ...tasksItems,
        { name: taskName, done: false, id: new Date().getTime() },
      ]);
    
  };
// TACHAR LAS TAREAS
  const toggleTask = (id) => {
    setTaskItem(
      tasksItems.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };

  // BORRAR LAS TAREAS
  const handleDelete = (id) => {
    setTaskItem(tasksItems.filter((item) => item.id !== id));
  };
// GUARDAR EN 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return{
    tasksItems,
    createNewTask,
    toggleTask,
    handleDelete

}
};
