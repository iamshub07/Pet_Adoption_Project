import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParam";

// //We are creating App React element can be matched to class in java
// //we can create n no of insatance of it also can be said as stamp
// const App = () => {
//   //Kind Of act of Stamping is createElement we did it twice first to create a
//   //div nd next to add h1 to it.
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, { name: "lune", animal: "Bird", breed: "Cockk" }),
//     React.createElement(Pet, { name: "lune", animal: "Dog", breed: "Wheaten" }),
//   ]);
// };
// //And now here we can't just pass a abstract stamp we have to create a instance
// //of stamp thus we are using createElement tag here again
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
