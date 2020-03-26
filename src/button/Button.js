import React from 'react';
import './Button.css';
import image from './images/image.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

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

const images = [
    image,
    image2,
    image3,
]

const contentArray = [
    text,
    images
]

let intLast = 0;
const changeContent = (changeState, setMedia) => {
    let intArray = Math.floor(Math.random() * contentArray.length);
    console.log(intArray);
    if (intArray === 0) {
        setMedia(intArray);
        let int = Math.floor(Math.random() * contentArray[intArray].length);
        if (intLast !== int) {
            changeState(contentArray[intArray][int]);
            intLast = int;
        } else {
            changeContent(changeState, setMedia);
        }
    } else {
        setMedia(intArray);
        let pic = Math.floor(Math.random() * contentArray[intArray].length);
        if (intLast !== pic) {
            let src = `${contentArray[intArray][pic]}`;
            changeState(src);
            intLast = pic;
        } else {
            changeContent(changeState, setMedia);
        }
    }

}


export const Button = props => {
    return (
        <div className='button' onClick={() => changeContent(props.buttonClick, props.media)}></div>
    );
};