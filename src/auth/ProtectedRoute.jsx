import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

//navigate user to login if user was not logged in
const ProtectedRoute = ({ children, user }) => {
    if (!user) {
        return <Navigate to="/auth" />;
    }
    return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    user: PropTypes.object,
};
