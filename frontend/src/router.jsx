import { createBrowserRouter } from 'react-router-dom';
import login from './views/login';
import register from './views/register';

export const router = createBrowserRouter([
    {
        path: '/login',
        component: <login />,
    },
    {
        path: '/register',
        component: <register />,
    }
]);
