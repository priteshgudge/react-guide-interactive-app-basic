import React from 'react';

const UserOutput = (props) => { 
        return (
            <div className="userOutput">
                <p>{props.userName} says: Hi</p>
                <p>{props.userName} 2 says: Hi</p>
            </div>
        );
    };

export default UserOutput;