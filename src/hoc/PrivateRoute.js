// import { useNavigate } from 'react-router-dom';

// const PrivateRoute = (props) => {
//   props.tokenCheck();
//   const nav = useNavigate;
//   if (!props.loggedIn) {
//     console.log(`private ${props.loggedIn}`);
//     nav('/');
//   }
//   else {
//     return props.children;
//   }
// };

import { Navigate } from 'react-router-dom';

// const PrivateRoute = (props) => {
//   const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
//   return loginStatus ? props.children : <Navigate to="/" />;
// };

const PrivateRoute = (props) => {
  const location = props.location.pathname;
  const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
  if (loginStatus) {
    if (location !== 'signin' || location !== 'signin') {
      return props.children;
      console.log(location);
    }
    console.log(location);
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
