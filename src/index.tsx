import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import ErrorPage from './ErrorPage';


const rootElement = document.getElementById('root')
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

// {/* <HashRouter>
  // <Route path='/' component={ Home } exact />
  // <Route path='/about' component={ About } exact />
  // {/*...*/}
// </HashRouter> */}

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
