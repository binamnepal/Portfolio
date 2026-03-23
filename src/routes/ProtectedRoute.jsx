import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const { token } = useSelector((state) => state.auth);
    const backupToken = localStorage.getItem("adminToken");
    
    return (token || backupToken) ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;