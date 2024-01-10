
import './App.css';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ProductsCrud } from './views/Admin/ProductsCrud.jsx';
import React from 'react'

export const App = () => {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Navigate to="/products"/>
    },
    {
      path:'/products',
      element: <ProductsCrud />
    }
  ])



  return (
    <RouterProvider router={router} />
  )
}


export default App;
