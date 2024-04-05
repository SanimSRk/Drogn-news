import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivedRout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const locations = useLocation();

  if (user) {
    return children;
  }

  return (
    <>
      <Navigate state={locations.pathname} to={'/login'}></Navigate>;
    </>
  );
};

export default PrivedRout;
