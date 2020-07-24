import React, {useState} from 'react';
import { ActionButton } from '../ActionButton/ActionButton';
import { NumButton } from '../NumButton/NumButton';
import './Calculator.css';

// TODO
// wyświetlenie ciągu ze stringiem
// możliwość np dodania wielu liczb do siebie bez znaku =
// opcjonalnie dodanie miedzy buttonami odstępu lub bordera
// po kliknięciu na znak następuje zmiana na nowy znak i usuniecie poprzedniego
function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
} 

export const Calculator = () => {
    const [storedNumber, setStoredNumber] = useState('');
    const [symbol, setSymbol] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [displayMath, setDisplayMath] = useState('');

    function displayNumbers(type) {
        const displayNumbers = displayMath.concat(type);
        setDisplayMath(displayNumbers);
        console.log(symbol);

        if (type === "C") {
            handleClearAll();
        }
    }

    function handleNumberClick(type) {
        if (symbol === '') {
            const sumStrings = storedNumber.concat(type);
            setStoredNumber(sumStrings); //funkcja, która aktualizuje stan state'a
        } else {
            const sumStrings = secondNumber.concat(type);
            setSecondNumber(sumStrings);
        }
        displayNumbers(type);
    }

    function doMath() {
        setSecondNumber('');

        return handleCounting();
    }

    function handleActionClick(type) {
        if (type === "C") {
            handleClearAll();
        } else if (type === "=") {
            const result = doMath();
            displayNumbers(`${type}${result}`);
        } else {
            setSymbol(type);
            if (secondNumber !== '' && storedNumber !== '') {
               doMath();
            }
            displayNumbers(type);
        }
        
    }

    function getPlaceholder() {
        if (secondNumber !== '') {
            return secondNumber;
        } 
        return storedNumber;
    }

    function handleClearAll() {
        setSymbol('');
        setStoredNumber('');
        setSecondNumber('');
        setDisplayMath('');
    }

    function handleCounting() {
        const leftNumber = parseInt(storedNumber);
        const rightNumber = parseInt(secondNumber);
        let result;
        
        switch (symbol) {
            case '+':
                result = leftNumber + rightNumber;
                setStoredNumber(result);
                return result;
            case '-':
                result = leftNumber - rightNumber;
                setStoredNumber(result);
                return result;
            case '*':
                result = leftNumber * rightNumber;
                setStoredNumber(result);
                return result;
            case '/':
                result = leftNumber / rightNumber;
                setStoredNumber(result);
                return result;
            default:
        }
    }

    return (
        <div className="container">
            <div className="calc-box">
            <div className="row">
                    <div className="string-field">
                        <p>{displayMath}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder={getPlaceholder()} disabled aria-label="Username" aria-describedby="addon-wrapping"/>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <NumButton callbackClicked={handleNumberClick} type={7}/>
                        <NumButton callbackClicked={handleNumberClick} type={8}/>
                        <NumButton callbackClicked={handleNumberClick} type={9}/>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <ActionButton callbackActionClicked={handleActionClick} type="+"/>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <NumButton callbackClicked={handleNumberClick} type={4}/>
                        <NumButton callbackClicked={handleNumberClick} type={5}/>
                        <NumButton callbackClicked={handleNumberClick} type={6}/>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <ActionButton callbackActionClicked={handleActionClick} type="-"/>
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <NumButton callbackClicked={handleNumberClick} type={1}/>
                        <NumButton callbackClicked={handleNumberClick} type={2}/>
                        <NumButton callbackClicked={handleNumberClick} type={3}/>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <ActionButton callbackActionClicked={handleActionClick} type="*"/>
                    </div>
                </div>
                <div className="row">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                        <NumButton callbackClicked={handleNumberClick} type={0}/>
                        <ActionButton callbackActionClicked={handleActionClick} type="C"/>
                        <ActionButton callbackActionClicked={handleActionClick} type="="/>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <ActionButton callbackActionClicked={handleActionClick} type="/"/>
                    </div>
                </div>
            </div>
        </div>
    )
};


