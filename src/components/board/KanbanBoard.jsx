import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import TaskColumn from "./TaskColumn";
import AddTaskModal from "./AddTaskModal";

export default function KanbanBoard({ isModalOpen, closeModal }) {
  const { state } = useTasks();
  const [taskToEdit, setTaskToEdit] = useState(null);

  const filteredTasks = state.tasks.filter((task) =>
    task.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const todoTasks = filteredTasks.filter((t) => t.status === "todo");
  const inProgressTasks = filteredTasks.filter(
    (t) => t.status === "in-progress" || t.status === "inprogress"
  );
  const doneTasks = filteredTasks.filter((t) => t.status === "done");

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const isEditOpen = !!taskToEdit;

  const handleClose = () => {
    setTaskToEdit(null);
    closeModal();
  };

  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0 overflow-auto">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <TaskColumn
            title="To-do"
            count={todoTasks.length}
            tasks={todoTasks}
            onEditTask={handleEdit} 
          />
          <TaskColumn
            title="In Progress"
            count={inProgressTasks.length}
            tasks={inProgressTasks}
            onEditTask={handleEdit} 
          />
          <TaskColumn
            title="Done"
            count={doneTasks.length}
            tasks={doneTasks}
            onEditTask={handleEdit} 
          />
        </div>
      </div>

      <AddTaskModal
        isOpen={isModalOpen || isEditOpen}
        onClose={handleClose}
        taskToEdit={taskToEdit}
      />
    </>
  );
}
