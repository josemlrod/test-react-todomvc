import React from 'react';

import ToDoCard from '../components/toDoCard';

export default props => {
    return(
        <>
            <div className='container border my-5 px-0 py-3'>
                <ToDoCard />
            </div>
        </>
    )
}