import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
	const navigate = useNavigate();
	const { isAuthenticated, accessToken } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isAuthenticated && accessToken)
			return navigate("/dashboard", { replace: true });
	}, [isAuthenticated, accessToken, navigate]);

	return children;
};

export default PublicRoute;
