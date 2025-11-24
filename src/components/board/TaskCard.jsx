import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import Badge from "../ui/Badge";

export default function TaskCard({ task, onEdit }) {
  const { dispatch } = useTasks();
  const [showMenu, setShowMenu] = useState(false);

  // "Move To" options
  const moveOptions = [
    { value: "todo", label: "To-do" },
    { value: "in-progress", label: "In Progress" },
    { value: "done", label: "Done" },
  ].filter((opt) => opt.value !== task.status);

  const handleDelete = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirm) dispatch({ type: "DELETE_TASK", payload: task.id });
  };

  const handleMove = (newStatus) => {
    dispatch({ type: "MOVE_TASK", payload: { taskId: task.id, newStatus } });
    setShowMenu(false);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative">
      {/* Dot Menu */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          className="p-1 rounded-full hover:bg-gray-100 text-gray-500 focus:outline-none"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
          </svg>
        </button>

        {showMenu && (
          <>
            {/*  close menu */}
            <div
              className="fixed inset-0 z-0"
              onClick={() => setShowMenu(false)}
            ></div>
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Move to
              </p>
              {moveOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleMove(opt.value)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                >
                  {opt.label}
                </button>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onEdit(task);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700"
                >
                  Edit Card
                </button>
                <button
                  onClick={handleDelete}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-600"
                >
                  Delete Card
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">{task.title}</h3>
      </div>
      <p className="text-xs text-gray-600 mb-4">{task.description}</p>

      <div className="flex items-center gap-2 mb-3">
        <Badge text={task.tag} />
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        {task.date}
      </div>
    </div>
  );
}
