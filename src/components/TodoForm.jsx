import React, { useEffect, useState, useRef } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({  // Fixed: Changed `onsubmit` to `onSubmit` (camelCase)
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">  {/* Fixed: Added curly braces */}
            {props.edit ? (
                <>
                    <input
                        placeholder="Update your item"
                        value={input}
                        onChange={handleChange}
                        name="text"  // Fixed: Changed `namee` to `name`
                        ref={inputRef}
                        className="todo-input edit"
                    />
                    <button onClick={handleSubmit} className="todo-button edit">
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Add a Todo"
                        value={input}
                        onChange={handleChange}
                        name="text"
                        className="todo-input"
                        ref={inputRef}
                    />
                    <button onClick={handleSubmit} className="todo-button">
                        Add Todos
                    </button>
                </>
            )}
        </form>
    );
};

export default TodoForm;