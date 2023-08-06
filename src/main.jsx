import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'

import './app.css'

if(localStorage.getItem('darkMode')){
  document.documentElement.setAttribute('data-theme', 'dark')
}
else {
  document.documentElement.setAttribute('data-theme', 'light')
}

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
)
