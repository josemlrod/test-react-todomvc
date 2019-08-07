import React from 'react';

export default props => {
    return(
        <>
            <div className="card toDoCard">
                <div className="card-body">
                    This is some text within a card body.
                    <button type="button" className="close toDoCard-button" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </>
    )
}