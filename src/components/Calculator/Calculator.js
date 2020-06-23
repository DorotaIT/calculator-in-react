import React, {Component, useState} from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import { NumButton } from '../NumButton/NumButton';

export const Calculator = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div className="container">
            <div className="row">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <NumButton type={7}/>
                    <NumButton type={8}/>
                    <NumButton type={9}/>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <ActionButton type="+"/>
                </div>
            </div>
            <div className="row">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <NumButton type={4}/>
                    <NumButton type={5}/>
                    <NumButton type={6}/>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <ActionButton type="-"/>
                </div>
            </div>
            <div className="row">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <NumButton type={1}/>
                    <NumButton type={2}/>
                    <NumButton type={3}/>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <ActionButton type="*"/>
                </div>
            </div>
            <div className="row">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                    <NumButton type={0}/>
                    <ActionButton type="."/>
                    <ActionButton type="="/>
                </div>
                <div class="btn-group mr-2" role="group" aria-label="Second group">
                    <ActionButton type="/"/>
                </div>
            </div>
        </div>
    )
};

