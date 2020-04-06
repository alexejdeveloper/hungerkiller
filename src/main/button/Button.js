import React from 'react';
import './Button.css';
import image from './images/image.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import tipsJson from '../../assets/data/tips';

const images = [image, image2, image3];

const contentArray = [tipsJson.tips, images];

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
};

export const Button = (props) => {
  return (
    <div
      className="button"
      onClick={() => buttonClick(props.setContent, props.setMediaType)}
    ></div>
  );
};
