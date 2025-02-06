import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from '../redux/todoSlice';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e)=> setTask(e.target.value)}
                placeholder="Enter your task"
                style={{
                    padding: '15px',
                    width: '400px',
                    marginRight: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '15px',
                    borderRadius: '5px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >Add</button>
        </form>
    );
};

export default TodoForm;