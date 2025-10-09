import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ children }) {
	const { isAuthenticated } = useSelector(state => state.user);
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return children;
}
