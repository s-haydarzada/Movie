import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home/home";
import DetailProduct from "./Components/DetailProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/login";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { AuthProvider } from "./context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoute>
            <DetailProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
