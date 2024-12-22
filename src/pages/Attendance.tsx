import { useState } from "react";
import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Clock, MapPin } from "lucide-react";

const Attendance = () => {
  const { toast } = useToast();
  const [clockedIn, setClockedIn] = useState(false);
  const [attendanceRecords] = useState([
    {
      date: "2024-03-20",
      clockIn: "09:00 AM",
      clockOut: "06:00 PM",
      status: "Present",
      workHours: "9h",
    },
    {
      date: "2024-03-19",
      clockIn: "09:15 AM",
      clockOut: "06:30 PM",
      status: "Present",
      workHours: "9.25h",
    },
  ]);

  const handleClockInOut = () => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    
    if (!clockedIn) {
      toast({
        title: "Clocked In",
        description: `You clocked in at ${time}`,
      });
    } else {
      toast({
        title: "Clocked Out",
        description: `You clocked out at ${time}`,
      });
    }
    
    setClockedIn(!clockedIn);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
            <p className="text-sm text-gray-500">Track your daily attendance and view history</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Clock In/Out</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-6">
                    <Clock className="h-12 w-12 text-primary" />
                  </div>
                  <Button
                    size="lg"
                    variant={clockedIn ? "destructive" : "default"}
                    onClick={handleClockInOut}
                  >
                    {clockedIn ? "Clock Out" : "Clock In"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-sm text-gray-500">Main Office, Building A</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Attendance History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Clock In</TableHead>
                    <TableHead>Clock Out</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Work Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.clockIn}</TableCell>
                      <TableCell>{record.clockOut}</TableCell>
                      <TableCell>{record.status}</TableCell>
                      <TableCell>{record.workHours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Attendance;