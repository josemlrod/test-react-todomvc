import React, { useEffect, } from 'react';

export default props => {
    const { task, idx, setToDos, completed, toDos } = props;
    const handleCompleted = e => {
        const toDoIdx = parseInt(e.target.title);
        setToDos(prevToDos => {
            const newToDoArr = [...prevToDos];
            newToDoArr[toDoIdx].setCompleted();
            return newToDoArr;
        });
    };
    const handleDelete = e => {
        const toDoIdx = parseInt(e.target.title);
        setToDos(prevToDos => {
            let newToDosArr;
            if (toDoIdx === 0) {
                newToDosArr = prevToDos.slice(toDoIdx + 1)
            } else {
                newToDosArr = prevToDos.slice(0, toDoIdx).concat(prevToDos.slice(toDoIdx + 1));
            };
            return newToDosArr;
        });
    };
    
    const renderToDoCard = _ => {
        if (completed) {
            return(
                <div className="card toDoCard mb-2 bg-dark">
                    <div className="card-body text-light">
                        <div className='form-check form-check-inline'>
                            <input className="form-check-input toDoCard-button" type="checkbox" 
                                id="inlineCheckbox1" title={ idx } onClick={ handleCompleted } />
                        </div>
                        { task }
                        <button type="button" className="close toDoCard-button" 
                            aria-label="Close" onClick={ handleDelete }>
                        <span aria-hidden="true" title={ idx }>&times;</span>
                        </button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="card toDoCard mb-2">
                    <div className="card-body">
                        <div className='form-check form-check-inline'>
                            <input className="form-check-input toDoCard-button" type="checkbox" 
                                id="inlineCheckbox1" title={ idx } onClick={ handleCompleted } />
                        </div>
                        { task }
                        <button type="button" className="close toDoCard-button" 
                            aria-label="Close" onClick={ handleDelete }>
                        <span aria-hidden="true" title={ idx }>&times;</span>
                        </button>
                    </div>
                </div>
            );
        };
    }

    return(
        <>
            {
                renderToDoCard()
            }
        </>
    );
};