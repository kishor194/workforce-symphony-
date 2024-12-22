import { Home, Users, Calendar, Clock, FileText, IndianRupee, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Users, label: "Employees", path: "/employees" },
  { icon: Calendar, label: "Leave Management", path: "/leave" },
  { icon: Clock, label: "Attendance", path: "/attendance" },
  { icon: IndianRupee, label: "Payroll", path: "/payroll" },
  { icon: Briefcase, label: "Projects", path: "/projects" },
  { icon: FileText, label: "Documents", path: "/documents" },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-primary p-4 text-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">HRMS</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary/80",
              location.pathname === item.path ? "bg-primary/60" : "transparent"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};