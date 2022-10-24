import React from "react";
import ReactDOM from "react-dom";

import App from './App';

const session = false;

const Index = () => {
  //return session === true ? <Home /> : <Login />;

  return (
    <App/>
  );
};

ReactDOM.render(<Index/>, document.getElementById("root"));
