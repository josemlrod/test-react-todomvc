import React from 'react';

export default props => {
    const { toDos, } = props;
    const activeToDos = _ => {
        let total = 0;
        for (let toDo of toDos) {
            if (!toDo.completed) total++;
        };
        return total;
    };

    return(
        <>
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container text-center">
                    <h1 className="display-4 text-light">To-Do</h1>
                    <p className="lead text-light">Active To-Dos: {activeToDos()}</p>
                </div>
            </div>
        </>
    );
};