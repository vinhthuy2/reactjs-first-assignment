import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </div>
    );
};

export default UserOutput;
