import { useState } from "react";

export default function TaskList({
  tasks,
  toggleCompletion,
  deleteTask,
  editTask,
}) {
  const [editMode, setEditMode] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (task) => {
    setEditMode(task._id);
    setEditText(task.title);
  };

  const handleSave = (id) => {
    editTask(id, editText);
    setEditMode(null);
  };

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
            {editMode === task._id ? (
              <input
                type="text"
                className="border p-1 rounded"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-600" : ""
                }`}
                onClick={() => toggleCompletion(task._id, task.completed)}
              >
                {task.title}
              </span>
            )}

            <div>
              {editMode === task._id ? (
                <button
                  onClick={() => handleSave(task._id)}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
