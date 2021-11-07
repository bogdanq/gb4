import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const age = 12;
const films = [
  { title: 1, year: 2020 },
  { title: 2, year: 2020 },
];

const ComponentWitoutJSX = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { id: "test" },
      `Hello from ComponentWitoutJSX ${age}`
    )
  );
};

// const reactElement = (
//   <div>
//     <h1>Hello my first component</h1>
//     <h2>Age: {age}</h2>

//     {films.map((film) => (
//       <div>
//         <h3>Title {film.title}</h3>
//         <h3>Year {film.year}</h3>
//       </div>
//     ))}
//   </div>
// );

const FilmsList = () => {
  return (
    <div>
      <h1>FilmsList</h1>

      {films.map((film) => (
        <div>
          <h3>Title {film.title}</h3>
          <h3>Year {film.year}</h3>
        </div>
      ))}
      <hr />
    </div>
  );
};

const FunctionComponent = (props) => {
  console.log("FunctionComponent", props);

  return (
    <div>
      <h1 onClick={() => props.test3("FunctionComponent")}>
        Hello my first FunctionComponent
      </h1>
      <h2>Age: {age}</h2>

      {props.children}

      <FilmsList />
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    console.log("ClassComponent", this.props);
    const { test1 } = this.props;

    return (
      <div>
        <h1 onClick={() => this.props.test3("ClassComponent")}>
          Hello my first ClassComponent
        </h1>
        <h2>Age: {age}</h2>

        <FilmsList />
      </div>
    );
  }
}

const App = ({ test1, ...rest }) => {
  return (
    <div>
      <h1>App</h1>
      <ComponentWitoutJSX />

      <ClassComponent {...rest} />

      <FunctionComponent {...rest}>
        <div>
          <h1>FunctionComponent Children</h1>
        </div>
      </FunctionComponent>
    </div>
  );
};

ReactDOM.render(
  <App test1={1} test2={[1, 2, 3]} test3={(data) => console.log(data)} test4 />,
  document.getElementById("root")
);
