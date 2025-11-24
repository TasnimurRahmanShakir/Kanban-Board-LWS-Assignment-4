import { useState, useEffect } from "react";
import { useTasks } from "../../context/TaskContext";
import { AVAILABLE_TAGS } from "../../context/initialData";

export default function AddTaskModal({ isOpen, onClose, taskToEdit }) {
  const { dispatch } = useTasks();
  const isEditMode = !!taskToEdit;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: AVAILABLE_TAGS[0],
    date: "",
    status: "todo",
  });


  useEffect(() => {
    if (isEditMode) {
      setFormData(taskToEdit);
    } else {
      setFormData({
        title: "",
        description: "",
        tag: AVAILABLE_TAGS[0],
        date: "",
        status: "todo",
      });
    }
  }, [taskToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch({ type: "EDIT_TASK", payload: formData });
    } else {
      dispatch({ type: "ADD_TASK", payload: formData });
    }
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{isEditMode ? "Edit Task" : "Add Task"}</h1>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
            />
          </div>
          {/*  Tags/Date/Status */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tag</label>
              <select name="tag" value={formData.tag} onChange={handleChange} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none">
                {AVAILABLE_TAGS.map((tag) => <option key={tag} value={tag}>{tag}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700">Status</label>
               <select name="status" value={formData.status} onChange={handleChange} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none">
                 <option value="todo">To-do</option>
                 <option value="in-progress">In Progress</option>
                 <option value="done">Done</option>
               </select>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-4">
             <button type="button" onClick={onClose} className="rounded-xl border px-4 py-3 text-sm font-medium hover:bg-gray-50">Cancel</button>
             <button type="submit" className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800">{isEditMode ? "Save Changes" : "Create Task"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}