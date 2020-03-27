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
const buttonClick = (setContent, setMediaType) => {
    let intArray = Math.floor(Math.random() * contentArray.length);
    if (intArray === 0) {
        setMediaType(intArray);
        let int = Math.floor(Math.random() * contentArray[intArray].length);
        if (intLast !== int) {
            setContent(contentArray[intArray][int]);
            intLast = int;
        } else {
            buttonClick(setContent, setMediaType);
        }
    } else {
        setMediaType(intArray);
        let pic = Math.floor(Math.random() * contentArray[intArray].length);
        if (intLast !== pic) {
            let src = `${contentArray[intArray][pic]}`;
            setContent(src);
            intLast = pic;
        } else {
            buttonClick(setContent, setMediaType);
        }
    }

}


export const Button = props => {
    return (
        <div className='button' onClick={() => buttonClick(props.setContent, props.setMediaType)}></div>
    );
};