import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component,...rest }) => {
  const navigate = useNavigate();
  const isAuthenticated =!!localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated? (
          <Component {...props} />
        ) : (
          navigate('/a/login', { replace: true })
        )
      }
    />
  );
};

export default PrivateRoute;