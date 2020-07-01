import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props.images);
  const imageResults = props.images;
  // console.log(imageResults);
  // shorthand add top level objects after map
  //   const images = imageResults.map(({ description, id, urls }) => {
  const images = imageResults.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// mapping arrays!

// const numbers = [0,1,2,3,4];

// let newNumbers=[];

// for (let i = 0 ; i < numbers.length;i++){
//   newNumbers.push(numbers[i] * 10 );
// }
// numbers;
// newNumbers

// numbers.map((myNumber) =>{
//   return  myNumber * 10;
// });

// numbers.map((myNumber) => myNumber * 10);

// really short!!!
// numbers.map(myNumber => myNumber * 10);
