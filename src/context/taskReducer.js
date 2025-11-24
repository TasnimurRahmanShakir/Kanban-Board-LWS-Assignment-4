export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, { ...action.payload, id: Date.now() }],
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };

        case "EDIT_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };

        case "MOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.taskId
                        ? { ...task, status: action.payload.newStatus }
                        : task
                ),
            };

        case "SEARCH_TASK":
            return {
                ...state,
                searchTerm: action.payload,
            };

        default:
            return state;
    }
};