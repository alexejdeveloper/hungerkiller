import React from 'react';
import './Button.css'

const text = [
    'was geht ab1',
    'was geht mit dir?2',
    'was geht ab3',
    'was geht mit dir4',
    'was geht ab5',
    'was geht mit dir?6',
    'was geht ab7',
    'was geht mit dir8?',
];


let intLast = 0;
const changeText = (buttonClick) => {
    let int = Math.floor(Math.random() * text.length);
    if (intLast !== int) {
        buttonClick(text[int]);
        intLast = int;
    } else {
        changeText(buttonClick);
    }
}

export const Button = props => {
    return (
        <div className='button' onClick={() => changeText(props.buttonClick)}></div>
    );
};