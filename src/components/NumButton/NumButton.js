import React from 'react';
import './NumButton.css';

export const NumButton = ({type, callbackClicked}) => {
    
    function handleNumberClick() {
        callbackClicked(type);
    }
     
    return (
        <button 
            onClick={handleNumberClick}
            type="button" 
            className="btn btn-secondary default-button">
            {type}
        </button>
    )
};
