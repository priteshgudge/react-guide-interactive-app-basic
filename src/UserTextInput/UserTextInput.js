import React from 'react';

const UserTextInput = (props) => {
        return (
            <div className="userInput">
                <input type="textarea" onChange={(event) => props.onChangehandler({
                    length:event.target.value.length,
                    stringValue: event.target.value,
                    })} />
            </div>
            );
        };

export default UserTextInput;