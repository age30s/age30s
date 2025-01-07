import './index.css';
import App from './App.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Experiences from "./pages/Experiences.jsx"
// Create root and render the app
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/experiences",
    element: <Experiences/>,
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
