export const initialTasks = [

    {
        id: 1,
        title: "Wireframes",
        description: "Set up high-fidelity prototypes with conditional logic",
        date: "2024-08-26",
        tag: "Design",
        status: "todo",
    },
    {
        id: 2,
        title: "Data Entry",
        description: "Data Entry Cleanup and validation",
        date: "2024-08-27",
        tag: "Operations",
        status: "todo",
    },
    {
        id: 3,
        title: "Social Media",
        description: "Social Media Scheduling and posting",
        date: "2024-08-28",
        tag: "Marketing",
        status: "todo",
    },

    {
        id: 4,
        title: "Graphic Design",
        description: "Graphic Design Edits and refinements",
        date: "2024-08-27",
        tag: "Creative",
        status: "in-progress",
    },
    {
        id: 5,
        title: "Presentation",
        description: "Presentation Slide Design",
        date: "2024-08-30",
        tag: "Development",
        status: "in-progress",
    },
    {
        id: 6,
        title: "API Integration",
        description: "Integrate payment gateway APIs",
        date: "2024-08-29",
        tag: "Backend",
        status: "in-progress",
    },

    {
        id: 7,
        title: "Software Installation",
        description: "Install and configure development tools",
        date: "2024-08-23",
        tag: "Setup",
        status: "done",
    },
    {
        id: 8,
        title: "Database Design",
        description: "Database schema and optimization",
        date: "2024-08-24",
        tag: "Infrastructure",
        status: "done",
    },
    {
        id: 9,
        title: "Documentation",
        description: "Complete API documentation",
        date: "2024-08-25",
        tag: "Documentation",
        status: "done",
    },
];

export const TAG_STYLES = {
    Design: "bg-blue-50 text-blue-700",
    Operations: "bg-amber-50 text-amber-700",
    Marketing: "bg-green-50 text-green-700",
    Creative: "bg-purple-50 text-purple-700",
    Development: "bg-indigo-50 text-indigo-700",
    Backend: "bg-red-50 text-red-700",
    Setup: "bg-green-50 text-green-700",
    Infrastructure: "bg-blue-50 text-blue-700",
    Documentation: "bg-cyan-50 text-cyan-700",
};

export const AVAILABLE_TAGS = Object.keys(TAG_STYLES);