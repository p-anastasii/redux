import React from 'react';
import {useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.tasks);
    const totalTodos = todos.length;

    return (
        <div>
            <div>
                {todos.map((todo) => (
                    <div
                        key={todo.id}
                        style={{
                            padding: '10px',
                            backgroundColor: '#f9f9f9',
                            borderRadius: '5px',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                        }}
                    >
                        {todo.text}
                    </div>
                ))}
            </div>
            <div>Total: {totalTodos}</div>
        </div>
    );
};

export default TodoList;