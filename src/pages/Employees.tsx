import { Layout } from "@/components/Layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Users, UserPlus, UserMinus } from "lucide-react";
import { EmployeeTable } from "@/features/employees/components/EmployeeTable";
import { AddEmployeeDialog } from "@/features/employees/components/AddEmployeeDialog";
import { employeesData, onboardingData, exitData } from "@/features/employees/data";

export default function Employees() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employee Management</h1>
          <AddEmployeeDialog 
            open={showAddEmployee} 
            onOpenChange={setShowAddEmployee} 
          />
        </div>

        <Tabs defaultValue="current">
          <TabsList>
            <TabsTrigger value="current">
              <Users className="mr-2 h-4 w-4" />
              Current Employees
            </TabsTrigger>
            <TabsTrigger value="onboarding">
              <UserPlus className="mr-2 h-4 w-4" />
              Onboarding
            </TabsTrigger>
            <TabsTrigger value="exit">
              <UserMinus className="mr-2 h-4 w-4" />
              Exit Management
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card>
              <CardHeader>
                <CardTitle>Current Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <EmployeeTable employees={employeesData} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Similar refactoring for onboarding and exit tabs */}
        </Tabs>
      </div>
    </Layout>
  );
}