import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CalendarCheck, CalendarX, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Leave = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [leaveType, setLeaveType] = useState("casual");
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Leave request submitted",
      description: "Your manager will review your request shortly.",
    });
  };

  const leaveBalance = [
    { type: "Casual Leave", balance: 12, used: 5 },
    { type: "Sick Leave", balance: 15, used: 2 },
    { type: "Earned Leave", balance: 30, used: 10 },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Leave Management</h1>
            <p className="text-sm text-gray-500">
              Apply for leave and check your leave balance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Apply for Leave</CardTitle>
                <CardDescription>Select dates and leave type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                  <Select value={leaveType} onValueChange={setLeaveType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">Casual Leave</SelectItem>
                      <SelectItem value="sick">Sick Leave</SelectItem>
                      <SelectItem value="earned">Earned Leave</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button onClick={handleSubmit} className="w-full">
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {leaveBalance.map((leave) => (
                <Card key={leave.type}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {leave.type}
                    </CardTitle>
                    {leave.used < leave.balance / 2 ? (
                      <CalendarCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <CalendarX className="h-4 w-4 text-yellow-500" />
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {leave.balance - leave.used}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Used: {leave.used} / {leave.balance}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Leave;