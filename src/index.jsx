import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from './CONTEXT/Context';
import {BrowserRouter as Router} from 'react-router-dom';
import {FilterContext} from './CONTEXT/FilterContext';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
<Router>
  <FilterContext>
   <Context>
      <App />
   </Context>
   </FilterContext>
</Router> 
  </React.StrictMode>
);

