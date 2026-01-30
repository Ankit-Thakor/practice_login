import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const addOrUpdateTodo = () => {
    const value = text.trim();
    if (!value) return;

    // UPDATE
    if (editId !== null) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text: value } : todo
        )
      );
      setEditId(null);
    } 
    // ADD
    else {
      const newTodo = {
        id: Date.now(),
        text: value,
        completed: false
      };
      setTodos(prev => [...prev, newTodo]);
    }

    setText("");
  };

  const startEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    if (id === editId) {
      setEditId(null);
      setText("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border rounded px-3 py-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..."
          />
          <button
            onClick={addOrUpdateTodo}
            className="bg-blue-500 text-white px-4 rounded"
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 p-2 rounded"
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`cursor-pointer flex-1 ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>

              <div className="flex gap-2 ml-2">
                <button
                  onClick={() => startEdit(todo)}
                  className="text-green-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
