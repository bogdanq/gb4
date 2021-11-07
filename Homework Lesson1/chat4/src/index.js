import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TEXT = `Hello My first homework with React!`;

function Message(props) {
  return <h1 style = {{ textAlign: "center", color: "#013220", font: "Helvetica", fontSize: "25px" }}>{props.name}</h1>
};

const App = () => {
  //console.log("Test1 in App", );
  return (
    <div>
      <Message name={TEXT}/>
    </div>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));

