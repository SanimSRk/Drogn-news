import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRoute from './Layout/MainRoute';
import Home from './pages/Home';
import AuthProvider from './AuthContext/AuthProvider';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import NewsDetails from './pages/NewsDetails';
import PrivedRout from './PrivedRoutd/PrivedRout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoute></MainRoute>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>,
      },
      {
        path: '/news/:id',
        element: (
          <PrivedRout>
            <NewsDetails></NewsDetails>
          </PrivedRout>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
