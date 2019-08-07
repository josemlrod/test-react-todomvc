import React, { useState, } from 'react';
import ToDoClass from '../utils/dataModels';

import Header from '../components/header';
import Input from '../components/input';
import ToDoHolder from '../components/toDoHolder';

export default props => {
    const [toDos, setToDos,] = useState([]);
    return(
        <>
            <Header />
            <div className='container'>
                <Input />
                <ToDoHolder />
            </div>
        </>
    )
}