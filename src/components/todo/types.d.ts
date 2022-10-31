interface ITodo {
  deleteTask: (id: number) => void;
  createTask: (description: string) => void;
  task: Task[];
  menu: Menu;
}
