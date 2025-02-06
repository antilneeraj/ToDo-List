export default function TaskList({ tasks, toggleCompletion, deleteTask }) {
  return (
    <ul className="mt-4 w-1/2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet. Add one!</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task._id}
            className={`flex justify-between items-center p-2 border rounded mb-2 ${
              task.completed ? "bg-green-200" : "bg-white"
            }`}
          >
            <span
              className={`cursor-pointer ${task.completed ? "line-through text-gray-600" : ""}`}
              onClick={() => toggleCompletion(task._id, task.completed)}
            >
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task._id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
