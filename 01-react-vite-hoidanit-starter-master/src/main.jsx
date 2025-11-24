import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import UsersPage from './pages/users.jsx';
import ProductsPage from './pages/products.jsx';
import './style/global.css'
import TodoApp from './component/todo/TodoApp.jsx';
import ErrorPage from './layout/error.jsx'; // Import the ErrorPage component from the layout folderp
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
