
import React from 'react';

const ValidationComponent = (props) => {

    const validateStringLength = (strLength) => {
        if (strLength < 5){
            return  "Text Too Short"
        } else if (strLength > 5) {
            return  "Text too long"
        }else{
            return null;
        }
    }
        return (
            <div className="validationComponent">
               {
                validateStringLength(props.stringLength)
               }
            </div>
            );
        };

export default ValidationComponent;