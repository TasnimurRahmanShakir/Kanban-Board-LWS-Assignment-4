import { useState } from "react";
import { TaskProvider } from "./context/TaskContext";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import KanbanBoard from "./components/board/KanbanBoard";

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row font-inter">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <Header onAddClick={() => setIsModalOpen(true)} />
        <KanbanBoard
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}
