import React from "react";
// import {username} from ".src/data/user.js";
// import {city} from ".src/data/user.js";
import { username, city } from "../data/user.js"; // Adjust the import path as necessary
// import {image} from ".src/data/user.js"; // Adjust the import path as necessary

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
// Note: The username and city variables should be defined in the component or passed as props.
// Example of defining the username and city variables
// const username = "Your Name"; // Replace with the actual username
// const city = "Your City"; // Replace with the actual city
// Example of passing the username and city as props
// function App() {
//   const username = "Your Name"; // Replace with the actual username
//   const city = "Your City"; // Replace with the actual city
//   return (

//     <div>
//       <NavBar />
//       <Home username={username} city={city} />

//       <About />
//     </div>
//   );
// }  
//    
// 