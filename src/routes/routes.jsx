import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import HomeSection from '../Pages/HomePage/HomeSection'
import Booking from '../Pages/Booking/Booking'
import House from '../Pages/House/House'
import Blogs from '../Pages/Blogs/Blogs'
import Contact from '../Pages/Contact/Contact'
import Logout from '../Pages/Logout/Logout'
import Login from '../Pages/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomeSection/>
      },
      {
        path: '/booking',
        element: <Booking/>
      },
      {
        path: '/house',
        element: <House/>
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/logout',
        element: <Logout/>
      },
    ]
  }
])

export default router
