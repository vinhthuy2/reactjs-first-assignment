import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input onChange={props.changed} type='text'/>
        </div>
    );
};

export default UserInput;

