import React from 'react';
import UserInput from '../UserInput/UserInput';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <h1>{props.username}</h1>
            <UserInput changed={props.changed} username={props.username}/>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </div>
    );
};

export default UserOutput;
