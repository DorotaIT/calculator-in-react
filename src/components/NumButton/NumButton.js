import React, {Component} from 'react';
import './NumButton.css';

export const NumButton = ({type}) => {
     
    return (
        <button 
            type="button" 
            className="btn btn-secondary default-button">
            {type}
        </button>
    )
};
