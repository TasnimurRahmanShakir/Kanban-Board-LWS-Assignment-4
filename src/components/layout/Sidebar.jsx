import {
  KanbanLogo,
  DashboardIcon,
  WorkspaceIcon,
  BoardIcon,
  CalendarIcon,
  SettingsIcon,
} from "../ui/Icons";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-64 bg-white border-gray-200 flex flex-col border-b lg:border-b-0 lg:border-r">
      {/* Logo & Navigation */}
      <div className="px-4 py-6 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <KanbanLogo />
          <span className="font-bold text-lg text-gray-900">Kanban</span>
        </div>

        <nav className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <DashboardIcon />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <WorkspaceIcon />
            <span>Workspace</span>
          </a>
          {/* Active State (Blue) */}
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium"
          >
            <BoardIcon />
            <span>Board</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <CalendarIcon />
            <span>Calendar</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SettingsIcon />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="mt-auto px-4 py-6 sm:px-6 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
            AT
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">Anna Taylor</p>
            <p className="text-xs text-gray-500 truncate">
              anna.taylor@mail.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
