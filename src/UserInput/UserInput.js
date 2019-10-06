import React from 'react';

const UserInput = (props) => {
        return (
            <div className="userInput">
                <input type="text" onChange={props.onChangeVal} value={props.userName} />
            </div>
            );
        };

export default UserInput;