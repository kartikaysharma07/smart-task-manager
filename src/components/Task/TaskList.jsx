import { useDispatch, useSelector } from "react-redux";
import { setTasks, deleteTask, toggleTaskCompletion } from "../../redux/features.js/taskSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCheck, faUndo } from "@fortawesome/free-solid-svg-icons";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-center mt-4"  style={{
          color: "var(--text-color)",
        }}>No tasks available.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`p-6 border border-gray-200 rounded-lg shadow transition duration-200 flex flex-col ${task.completed ? "bg-green-100" : ""
                }`}
              style={{
                backgroundColor: "var(--nav-background-color)",
                color: "var(--text-color)",
              }}
            >
              <div className="flex justify-between items-start">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "var(--text-color)" }}
                >
                  {task.title}
                </h2>
                <div className="flex space-x-4">
                  <Link
                    to={`/task/${task.id}/edit`}
                    className="hover:underline"
                    style={{ color: "var(--link-color)" }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="hover:underline cursor-pointer"
                    style={{ color: "var(--delete-color)" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    onClick={() => handleToggleCompletion(task.id)}
                    className="hover:underline cursor-pointer"
                    style={{
                      color: task.completed
                        ? "var(--undo-color)"
                        : "var(--complete-color)",
                    }}
                  >
                    <FontAwesomeIcon icon={task.completed ? faUndo : faCheck} />
                  </button>
                </div>
              </div>
              <p className="mt-4" style={{ color: "var(--text-color)" }}>
                {task.description}
              </p>
              <p className="mt-2" style={{ color: "var(--text-color)" }}>
                Due Date: <span className="font-medium">{task.dueDate}</span>
              </p>
              <p className="mt-2" style={{ color: "var(--text-color)" }}>
                Priority: <span className="font-medium">{task.priority}</span>
              </p>
            </li>
          ))}
        </ul>

      )}
    </>
  );
};

export default TaskList;