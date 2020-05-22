import React from 'react';
import './App.css';
import { CalcButton } from './CalcButton/CalcButton';
import { ClearButton } from './ClearButton/ClearButton';
import { Input } from './Input/Input';

class App extends React.Component {
 
    state = {
        current: ""
    };

  


    render() {
        return (
            <div className="container">
                <h2>Kalkulator</h2>
                <CalcButton/>
            </div>
        );
    }
}

export default App;