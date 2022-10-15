import { useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  const nav = useNavigate;
  if (props.loggedIn) {
    return props.children
  }
  return nav('/')
};

export default PrivateRoute;