import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContactPage from '../src/components/ContactPage'
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom'
import AboutRecipes from './components/AboutRecipes.jsx'
import RecipeCard from './components/RecipeCard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/contact", element: <ContactPage /> },
      { path: "/about", element: <AboutRecipes /> },
      { path: "/RecipeCard", element: <RecipeCard /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
 