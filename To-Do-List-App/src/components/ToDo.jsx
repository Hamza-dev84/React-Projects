
import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./ToDo.css";

function ToDo() {
    const [inputValue, setInputValue] = useState("");
    const [Task, setTask] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(Task))
    }, [Task])
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setTask(prev => [...prev, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue("");
    };

    const handleDelete = (id) => {
        const updatedTasks = Task.filter(task => task.id !== id);
        setTask(updatedTasks);
    };

    const handleChecked = (id) => {
        const updatedTasks = Task.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTask(updatedTasks);
    };

    const handleClearBtn = () => {
        setTask([]);
    };

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List App</h1>
            </header>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className='TodoInput'
                            placeholder='Enter Text'
                            value={inputValue}
                            onChange={handleInput}
                        />
                    </div>
                    <button type='submit' className="TodoBtn">Add Task</button>
                </form>
            </section>

            <section className="uoList">
                <ul>
                    {Task.map(task => (
                        <li key={task.id} className={task.completed ? "completed" : ""}>
                            {task.text}
                            <div className="btns">
                                <button className="check-btn" onClick={() => handleChecked(task.id)}>
                                    <FaCheck />
                                </button>
                                <button className="del-btn" onClick={() => handleDelete(task.id)}>
                                    <MdDelete />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="lastBtn">
                <button className="clearBtn" onClick={handleClearBtn}>Clear All</button>
            </section>
        </section>
    );
}

export default ToDo;
