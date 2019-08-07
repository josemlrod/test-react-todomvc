import React from 'react';

export default props => {
    const { task, } = props
    return(
        <>
            <div className="card toDoCard mb-3">
                <div className="card-body">
                    {task}
                    <button type="button" className="close toDoCard-button" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </>
    )
}