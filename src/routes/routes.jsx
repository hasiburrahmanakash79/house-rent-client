import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h2>ERROR.....</h2>,
    children: [{}]
  }
])

export default router
