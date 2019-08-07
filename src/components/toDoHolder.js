import React from 'react';

import ToDoCard from '../components/toDoCard';

export default props => {
    const { toDos, setToDos } = props;
    return(
        <>
            <div className='container my-3 px-0 py-3'>
                {
                    (!toDos.length) ? 
                        null
                    :
                        toDos.map((e, i) => <ToDoCard key={ i } task={ e.task } 
                            idx={ i } setToDos={ setToDos } toDos={ toDos } />)
                }
            </div>
        </>
    )
}