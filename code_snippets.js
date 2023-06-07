// Code Snippet 8
const createTask = (title, description, dueDate) => ({
    title,
    description,
    dueDate,
    isCompleted: false,
  });
  
  
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
  
  
  
  // Code Snippet 2
  const taskManager = createTaskManager();
  
  
  
  // Code Snippet 1
  taskManager.addTask("Finish coding project", "Complete the remaining tasks in the project", "2023-05-31");
  
  
  
  // Code Snippet 6
  taskManager.addTask("Buy groceries", "Get milk, eggs, and bread", "2023-05-22");
  
  
  
  // Code Snippet 10
  taskManager.completeTask(0);
  
  
  
  // Code Snippet 17
  taskManager.addTask("Go for a run", "Jog in the park for 30 minutes", "2023-05-23");
  
  
  
  // Code Snippet 16
  taskManager.deleteTask(1);
  
  
  
  // Code Snippet 7
  const tasks = taskManager.getTasks();
  
  
  
  // Code Snippet 12
  tasks.forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Due Date: ${task.dueDate}`);
    console.log(`Completed: ${task.isCompleted}`);
  });
  
  
  
  // Code Snippet 14
  const taskCount = tasks.length;
  console.log(`Total tasks: ${taskCount}`);
  
  
  
  // Code Snippet 5
  const completedTasks = tasks.filter((task) => task.isCompleted);
  console.log(`Completed tasks: ${completedTasks.length}`);
  
  
  
  // Code Snippet 13
  const pendingTasks = tasks.filter((task) => !task.isCompleted);
  console.log(`Pending tasks: ${pendingTasks.length}`);
  
  
  
  // Code Snippet 3
  const taskTitles = tasks.map((task) => task.title);
  console.log(`Task titles: ${taskTitles.join(", ")}`);
  
  
  
  // Code Snippet 11
  const today = new Date().toISOString().split("T")[0];
  const dueTodayTasks = tasks.filter((task) => task.dueDate === today);
  console.log(`Tasks due today: ${dueTodayTasks.length}`);
  
  
  
  // Code Snippet 15
  const sortedTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  console.log("Tasks sorted by due date:");
  sortedTasks.forEach((task) => {
    console.log(`Task: ${task.title}`);
    console.log(`Due Date: ${task.dueDate}`);
  });
  
  
  
  // Code Snippet 9
  console.log("Task management application executed successfully!");

// This codebase represents a task management application that allows users to create, delete, complete, and view tasks. 
// It utilizes arrow functions to define the functionality of each action. The application starts by creating a task 
// manager using the createTaskManager function. Tasks can be added using the addTask function, deleted using the deleteTask.

// 8, 4, 2, 1, 6, 10, 17, 16, 7, 12, 14, 5, 13, 3, 11, 15, 9