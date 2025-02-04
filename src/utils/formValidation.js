export const validateTask = (task) => {
    const errors = {};
  
    if (!task.title) {
      errors.title = "Title is required";
    } else if (task.title.length < 3) {
      errors.title = "Title must be at least 3 characters long";
    }
  
    if (!task.description) {
      errors.description = "Description is required";
    } else if (task.description.length < 5) {
      errors.description = "Description must be at least 5 characters long";
    }
  
    if (!task.dueDate) {
      errors.dueDate = "Due date is required";
    }
  
    return errors;
  };
  