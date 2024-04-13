import { Outlet, Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/contextProvider';

export const GuestLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
