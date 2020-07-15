import React from 'react';
import './ActionButton.css';

export const ActionButton = ({type, callbackActionClicked}) => {
    function handleActionClick() {
        callbackActionClicked(type);
    }

    return (
        <button 
            onClick={handleActionClick}
            type="button" 
            className="btn btn-secondary default-button">
            {type}
        </button>
    )
}
