import React, { useState, } from 'react';

import Header from '../components/header';
import Input from '../components/input';
import ToDoHolder from '../components/toDoHolder';

export default props => {
    const [input, setInput,] = useState('');
    const [toDos, setToDos,] = useState([]);

    const addToDo = toDoItem => 
        setToDos(prevToDos => prevToDos.concat([toDoItem,]));

    return(
        <>
            <Header />
            <div className='container'>
                <Input addToDo={addToDo} input={input} setInput={setInput} />
                <ToDoHolder />
            </div>
        </>
    )
}