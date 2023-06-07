// Code Snippet 4
const createTaskManager = () => {
    let tasks = [];
  
    const addTask = (title, description, dueDate) => {
      const task = createTask(title, description, dueDate);
      tasks.push(task);
    };
  
    const deleteTask = (index) => {
      tasks.splice(index, 1);
    };
  
    const completeTask = (index) => {
      const task = tasks[index];
      task.isCompleted = true;
    };
  
    const getTasks = () => tasks;
  
    return {
      addTask,
      deleteTask,
      completeTask,
      getTasks,
    };
  };