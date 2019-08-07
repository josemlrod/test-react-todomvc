import React from 'react';

import ToDoItem from '../utils/dataModels';

export default props => {
    const { setInput, input, addToDo, } = props;
    const handleChange = e => setInput(e.target.value);
    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            const toDoItem = new ToDoItem(input);
            addToDo(toDoItem);
            setInput('');    
        };
    };
    const handleClick = _ => {
        const toDoItem = new ToDoItem(input);
        addToDo(toDoItem);
        setInput('');
    };
    return(
        <>
            <div className="input-group input-group-lg">                
                <input type="text" className="form-control" value={input} aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-lg" onChange={handleChange}
                        onKeyDown={handleKeyDown} autoFocus />
                <div className="input-group-append" onClick={handleClick}>
                    <span className="input-group-text bg-dark text-light" id="inputGroup-sizing-lg">+</span>
                </div>
            </div>
        </>
    );
};