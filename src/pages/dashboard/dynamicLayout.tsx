import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { Navigate } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import UserDashboardLayout from "./user/UserDashboardLayout";

interface DynamicLayoutProps {
  children?: ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  const role = user.role;

  if (role === "admin") {
    return <AdminLayout>{children}</AdminLayout>;
  } else if (role === "user") {
    return <UserDashboardLayout>{children}</UserDashboardLayout>;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default DynamicLayout;
