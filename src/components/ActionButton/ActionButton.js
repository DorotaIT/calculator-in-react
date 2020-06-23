import React, {Component} from 'react';
import './ActionButton.css';

export const ActionButton = ({type}) => {


    return (
        <button 
            type="button" 
            className="btn btn-secondary default-button">
            {type}
        </button>
    )
}
