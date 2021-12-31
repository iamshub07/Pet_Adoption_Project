/*global React ReactDOM */

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

//We are creating App React element can be matched to class in java
//we can create n no of insatance of it also can be said as stamp
const App = () => {
  //Kind Of act of Stamping is createElement we did it twice first to create a
  //div nd next to add h1 to it.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "lune",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, { name: "lune", animal: "Bird", breed: "Cockk" }),
    React.createElement(Pet, { name: "lune", animal: "Dog", breed: "Wheaten" }),
  ]);
};
//And now here we can't just pass a abstract stamp we have to create a instance
//of stamp thus we are using createElement tag here again
ReactDOM.render(React.createElement(App), document.getElementById("root"));
