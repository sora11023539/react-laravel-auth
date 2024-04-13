import { createBrowserRouter } from 'react-router-dom';
import { Login } from './views/login';
import { Register } from './views/register';
import { DefaultLayout } from './Components/DefaultLayout';
import { Users } from './views/users';
import { GuestLayout } from './Components/GuestLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
