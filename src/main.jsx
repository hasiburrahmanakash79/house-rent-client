import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'

if(localStorage.getItem('darkMode')){
  document.documentElement.setAttribute('data-theme', 'dark')
}
else{
  document.documentElement.setAttribute('data-theme', 'light')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='container mx-auto'>
   <RouterProvider router={router}></RouterProvider>
   </div>
  </React.StrictMode>
)
