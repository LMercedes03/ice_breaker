 // Code Snippet 15
 const sortedTasks = tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
 console.log("Tasks sorted by due date:");
 sortedTasks.forEach((task) => {
   console.log(`Task: ${task.title}`);
   console.log(`Due Date: ${task.dueDate}`);
 });
 