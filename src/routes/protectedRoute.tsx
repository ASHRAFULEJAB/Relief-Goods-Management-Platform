import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  roles,
}: {
  children: ReactNode;
  roles: string[];
}) => {
  // Retrieve token from cookies
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accesstoken="))
    ?.split("=")[1];

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  const decodedToken = JSON.parse(atob(token.split(".")[1]));

  if (!roles.includes(decodedToken.role)) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
