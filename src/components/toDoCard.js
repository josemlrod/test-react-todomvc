import React from 'react';

export default props => {
    const { task, idx, setToDos } = props;
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
    return(
        <>
            <div className="card toDoCard mb-3">
                <div className="card-body">
                    { task }
                    <button type="button" className="close toDoCard-button" 
                        aria-label="Close" onClick={ handleDelete }>
                       <span aria-hidden="true" title={ idx }>&times;</span>
                    </button>
                </div>
            </div>
        </>
    )
}