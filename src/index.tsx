import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import ErrorPage from './ErrorPage';
import { loader } from './loader';

const Home = () => {
  return (
<div>loading please wait
  <div style={{
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  }}>
    <Outlet />
  </div>
  </div>
  )
  
}

const rootElement = document.getElementById('root')
const router = createBrowserRouter([
  {
    path: "/octoria/xrservice/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        loader: loader,
        path: "/octoria/xrservice/model/:model",
        element: <App />,
      },
    ],
  },
]);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
