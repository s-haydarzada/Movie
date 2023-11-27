import React,{ useState } from "react";
import "./App.css";
import Home from './pages/Home/home';
import DetailProduct from "./Components/DetailProduct";
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router=createBrowserRouter([
  {
    path:"/",
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:id",
        element:<DetailProduct/>
      }
    ]
  }
]);

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
