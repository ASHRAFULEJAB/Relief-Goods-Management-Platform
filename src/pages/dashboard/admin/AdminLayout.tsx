import { ReactNode } from "react";
import DashboardLayout from "./DashboardLayout";

interface AdminLayoutProps {
  children?: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <DashboardLayout />
      {children}
    </div>
  );
};

export default AdminLayout;
