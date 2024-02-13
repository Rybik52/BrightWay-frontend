import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const isAuthenticated = true;
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/login", { replace: true });
		}
	}, [isAuthenticated, navigate]);

	return children;
};

export default ProtectedRoute;
