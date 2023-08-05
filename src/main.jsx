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
 <div className='max-w-screen-2xl mx-auto'>
   <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
 </div>
)
