import React from "react";
import {image} from "../data/user.js"; 
 // Replace with the actual path to your image
function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;




// Note: The image variable should be defined in the component or imported from a file.

// Example of defining the image variable
// const image = "path/to/image.jpg"; // Replace with the actual path to your image 
// or import it at the top of your file
// import image from "./path/to/image.jpg"; // Replace with the actual path to your image
// Note: Make sure to replace the image path with the actual path to your image file.
// or import it at the top of your file

// import image from "./path/to/image.jpg"; // Replace with the actual path to your image
// Note: Make sure to replace the image path with the actual path to your image file.
// Example of defining the image variable 

// const image = "path/to/image.jpg"; // Replace with the actual path to your image
