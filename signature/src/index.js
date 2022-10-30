import React from "react";
import { createRoot } from 'react-dom/client';

import App from './App';

const session = false;

const Index = () => {
  //return session === true ? <Home /> : <Login />;

  return (
    <App/>
  );
};


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Index/>);
