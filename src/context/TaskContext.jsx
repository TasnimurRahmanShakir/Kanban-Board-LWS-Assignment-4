import { createContext, useReducer, useContext } from "react";
import { taskReducer } from "./taskReducer";
import { initialTasks } from "./initialData";

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: initialTasks,
    searchTerm: "",
  });

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  return useContext(TaskContext);
};