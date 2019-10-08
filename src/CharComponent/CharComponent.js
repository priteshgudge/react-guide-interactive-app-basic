
import React from 'react';
import './CharComponent.css'

const CharComponent = (props) => {

        //debugger;
        return (
            <div className="charComponent">
               {props.value}
            </div>
            );
        };

export default CharComponent;