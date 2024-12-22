import { Header } from "@/components/Layout/Header";
import { Sidebar } from "@/components/Layout/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download, IndianRupee } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Payroll = () => {
  const { toast } = useToast();

  const salaryComponents = {
    earnings: [
      { component: "Basic Salary", amount: 50000 },
      { component: "House Rent Allowance", amount: 20000 },
      { component: "Special Allowance", amount: 15000 },
      { component: "Transport Allowance", amount: 5000 },
    ],
    deductions: [
      { component: "Provident Fund", amount: 6000 },
      { component: "Professional Tax", amount: 200 },
      { component: "Income Tax (TDS)", amount: 8000 },
    ],
  };

  const totalEarnings = salaryComponents.earnings.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const totalDeductions = salaryComponents.deductions.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const netSalary = totalEarnings - totalDeductions;

  const handleDownloadPayslip = () => {
    toast({
      title: "Payslip Downloaded",
      description: "Your payslip has been downloaded successfully.",
    });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Payroll</h1>
            <p className="text-sm text-gray-500">
              View your salary details and download payslips
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Gross Earnings
                </CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{totalEarnings}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Deductions
                </CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{totalDeductions}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Salary</CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹{netSalary}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Earnings</CardTitle>
                <CardDescription>Salary components and allowances</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {salaryComponents.earnings.map((item) => (
                      <TableRow key={item.component}>
                        <TableCell>{item.component}</TableCell>
                        <TableCell className="text-right">₹{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deductions</CardTitle>
                <CardDescription>
                  Statutory and other deductions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Component</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {salaryComponents.deductions.map((item) => (
                      <TableRow key={item.component}>
                        <TableCell>{item.component}</TableCell>
                        <TableCell className="text-right">₹{item.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Button onClick={handleDownloadPayslip}>
              <Download className="mr-2 h-4 w-4" />
              Download Payslip
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payroll;