import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();
	const { isAuthenticated, accessToken } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!isAuthenticated && !accessToken)
			return navigate("/login", { replace: true });
	}, [isAuthenticated, accessToken, navigate]);

	return children;
};

export default PrivateRoute;
