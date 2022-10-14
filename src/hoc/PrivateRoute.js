import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  return props.loggedIn ? props.children : <Navigate to="/"/>;
};

export default PrivateRoute;