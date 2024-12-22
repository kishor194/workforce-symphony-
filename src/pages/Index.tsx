import { Card } from "@/components/ui/card";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import {
  Users,
  Calendar,
  Clock,
  Briefcase,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "156",
    icon: Users,
    trend: "+12% from last month",
  },
  {
    title: "On Leave Today",
    value: "8",
    icon: Calendar,
    trend: "4 pending requests",
  },
  {
    title: "Clock In Rate",
    value: "95%",
    icon: Clock,
    trend: "Above target",
  },
  {
    title: "Active Projects",
    value: "12",
    icon: Briefcase,
    trend: "2 starting next week",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Overview of your organization
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {stat.title}
                    </p>
                    <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  {stat.trend}
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;