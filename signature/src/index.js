import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";


const session = false;


/*const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Index/>);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>

);

