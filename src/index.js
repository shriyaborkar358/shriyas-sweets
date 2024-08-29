import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./views/Home/Home"
import About from './views/About/About';
import "./index.css"
import { THEME } from './config/data';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  }
])

root.render(<div style={{background:THEME.bodyBgColor, height: "90vh", }}>
  <RouterProvider router={router}/>
</div>);


