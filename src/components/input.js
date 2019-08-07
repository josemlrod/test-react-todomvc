import React from 'react';

export default props => {
    return(
        <>
            <div className="input-group input-group-lg">                
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                <div className="input-group-append">
                    <span className="input-group-text" id="inputGroup-sizing-lg">+</span>
                </div>
            </div>
        </>
    )
}