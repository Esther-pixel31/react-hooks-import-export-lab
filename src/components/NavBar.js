import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

export default NavBar;
// Note: The href attribute should point to the correct section ID in your HTML.
// Example of using the NavBar component in your main App component
// import React from "react";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import About from "./About";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//     </div>

//   );
// }

