import React, { useState } from 'react';
import './App.css'; // Importing the CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '' || dueDate.trim() === '') {
      toast.error("Please enter both task and due date");
      return;
    }
    
    setTodos([...todos, { task: inputValue, date: dueDate }]);
    setInputValue('');
    setDueDate('');
    toast.success("Task added successfully!");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="todo-input"
        placeholder="Enter a new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="todo-input"
        placeholder="Due date"
      />
      <button onClick={addTodo} className="todo-button">Add</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div>
              <div>{todo.task}</div>
              <div>Due: {todo.date}</div>
            </div>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default TodoList;
