  // Code Snippet 11
  const today = new Date().toISOString().split("T")[0];
  const dueTodayTasks = tasks.filter((task) => task.dueDate === today);
  console.log(`Tasks due today: ${dueTodayTasks.length}`);