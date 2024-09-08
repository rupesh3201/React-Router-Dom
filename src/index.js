import ReactDOM from 'react-dom/client'
import Home from './view/Home/Home'
import About from './view/About/About';
import Contact from './view/Contact/Contact';
import "./index.css"
import "./component/Navbar/Nvabar.css"

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/About',
    element: <About/>
  },
  {
    path: '/Contact',
    element: <Contact/>
  }
])
root.render(<RouterProvider router={router}/>)