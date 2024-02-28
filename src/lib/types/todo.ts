// Description: Types for todo.
type Todo = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    completed: boolean;
    completedAt: Date | null;
    dueDate: Date;
};

export type { Todo };
