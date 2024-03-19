import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/auth/login" />;
  // return isAuth ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;
