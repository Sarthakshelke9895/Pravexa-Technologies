import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("pravexaAdminToken");
  return token ? children : <Navigate to="/admin" replace />;
}

export default ProtectedRoute;
