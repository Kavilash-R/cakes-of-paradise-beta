import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cakes from './components/new-pages/Cakes';
import Puffs from './components/new-pages/Puffs';
import Others from './components/new-pages/Others';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/new-pages/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
  },
  {
    path:"cakes",
    element:< Cakes/>
  },
  {
    path:"puffs",
    element:< Puffs/>
  },
  {
    path:"others",
    element:< Others/>
  },
  {
    path:"about",
    element:< About/>
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

