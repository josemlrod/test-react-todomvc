import React from 'react';

import Header from '../components/header';
import Input from '../components/input';
import ToDoHolder from '../components/toDoHolder';

export default props => {
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