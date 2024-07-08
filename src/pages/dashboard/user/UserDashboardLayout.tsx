import { ReactNode } from "react";
import UserDashboard from "./UserDashboard";

interface AdminLayoutProps {
  children?: ReactNode;
}

const UserDashboardLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <UserDashboard />
      {children}
    </div>
  );
};

export default UserDashboardLayout;
