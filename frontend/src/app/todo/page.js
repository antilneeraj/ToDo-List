"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "@/components/TaskList";

export default function TodoPage() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = async () => {
    if (!task) return;
    const newTask = { title: task };
    const res = await axios.post("http://localhost:5000/tasks", newTask);
    setTasks([...tasks, res.data]);
    setTask("");
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const toggleCompletion = async (id, completed) => {
    const res = await axios.put(`http://localhost:5000/tasks/${id}`, { completed: !completed });
    setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold">To-Do List</h1>
        <div className="mt-4 flex">
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Task
          </button>
        </div>
        <TaskList tasks={tasks} toggleCompletion={toggleCompletion} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
