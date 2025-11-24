import { useState, useMemo } from "react";
import TaskCard from "./TaskCard";
import { FilterIcon, SortIcon } from "../ui/Icons";
import { AVAILABLE_TAGS } from "../../context/initialData";

export default function TaskColumn({ title, count, tasks, onEditTask }) {
  const [filterTag, setFilterTag] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // State for toggling menus (null, 'filter', or 'sort')
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeDropdowns = () => setActiveDropdown(null);

  // Filter & Sort Logic
  const processedTasks = useMemo(() => {
    let result = [...tasks];

    if (filterTag) {
      result = result.filter((t) => t.tag === filterTag);
    }

    if (sortOrder) {
      result.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
    }

    return result;
  }, [tasks, filterTag, sortOrder]);

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {count}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("filter");
              }}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
            >
              <FilterIcon />
              Filter
            </button>
            {/* Filter Menu */}
            {activeDropdown === "filter" && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={closeDropdowns}
                ></div>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-40 p-2">
                  <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Filter by tag
                  </p>
                  <button
                    onClick={() => {
                      setFilterTag(null);
                      closeDropdowns();
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    All
                  </button>
                  {AVAILABLE_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setFilterTag(tag);
                        closeDropdowns();
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("sort");
              }}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
            >
              <SortIcon />
              Sort
            </button>
            {/* Sort  */}
            {activeDropdown === "sort" && (
              <>
                <div
                  className="fixed inset-0 z-30"
                  onClick={closeDropdowns}
                ></div>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-40 p-2">
                  <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Sort by date
                  </p>
                  <button
                    onClick={() => {
                      setSortOrder("newest");
                      closeDropdowns();
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Newest first
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("oldest");
                      closeDropdowns();
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    Oldest first
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto min-h-[200px]">
        {processedTasks.length === 0 ? (
          <div className="text-center text-gray-400 py-10 text-sm">
            Not Found
          </div>
        ) : (
          processedTasks.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={onEditTask} />
          ))
        )}
      </div>
    </div>
  );
}
