import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: 'about',
      element: <About/>,
    },
  ],
},
{
  path: '/about',
  element: <p>about</p>,
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router = {router}/>
)
  
