import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home'
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import "./index.css"
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
const current_path = window.location.pathname
const root = ReactDOM.createRoot(document.getElementById('root'));