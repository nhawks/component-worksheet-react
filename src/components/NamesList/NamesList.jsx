import React from 'react';


function NamesList(props) {
    return ( 
        <div className="container-fluid">
            <h1>List of Names</h1>
            <hr />
            <ul>
                {props.names.map((name) =>
                    <li>{name}</li>
                )}
            </ul>
        </div>
    );
}

export default NamesList;