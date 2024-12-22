import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Layout } from "@/components/Layout/Layout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Plus } from "lucide-react";

const projectsData = [
  {
    id: 1,
    name: "HRMS Development",
    description: "Internal HR Management System",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    status: "In Progress",
    progress: 65,
    budget: 150000,
    billedAmount: 97500,
    teamSize: 5,
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "Online retail solution",
    startDate: "2024-02-15",
    endDate: "2024-08-15",
    status: "Planning",
    progress: 25,
    budget: 200000,
    billedAmount: 50000,
    teamSize: 8,
  },
];

const employeeProjectMappings = [
  {
    id: 1,
    employeeName: "John Doe",
    projectName: "HRMS Development",
    role: "Full Stack Developer",
    allocation: 100,
    billableHours: 160,
    utilization: 85,
  },
  {
    id: 2,
    employeeName: "Jane Smith",
    projectName: "E-commerce Platform",
    role: "Project Manager",
    allocation: 75,
    billableHours: 120,
    utilization: 90,
  },
];

export default function Projects() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [showAddAllocation, setShowAddAllocation] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Project Management</h1>
          <div className="space-x-4">
            <Dialog open={showAddProject} onOpenChange={setShowAddProject}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Project</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input placeholder="Project Name" />
                  <Input placeholder="Description" />
                  <Input type="date" placeholder="Start Date" />
                  <Input type="date" placeholder="End Date" />
                  <Input type="number" placeholder="Budget" />
                  <Button onClick={() => setShowAddProject(false)}>Create Project</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={showAddAllocation} onOpenChange={setShowAddAllocation}>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Resource
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Resource Allocation</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Input placeholder="Employee Name" />
                  <Input placeholder="Project" />
                  <Input placeholder="Role" />
                  <Input type="number" placeholder="Allocation %" />
                  <Button onClick={() => setShowAddAllocation(false)}>Add Resource</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="projects" className="space-y-4">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="allocations">Resource Allocation</TabsTrigger>
            <TabsTrigger value="billing">Billing & Utilization</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Timeline</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Team Size</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projectsData.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.description}</TableCell>
                        <TableCell>
                          {project.startDate} - {project.endDate}
                        </TableCell>
                        <TableCell>
                          <div className="w-[100px]">
                            <Progress value={project.progress} className="h-2" />
                          </div>
                        </TableCell>
                        <TableCell>{project.status}</TableCell>
                        <TableCell>{project.teamSize}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocations">
            <Card>
              <CardHeader>
                <CardTitle>Resource Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee Name</TableHead>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Allocation %</TableHead>
                      <TableHead>Utilization %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeProjectMappings.map((mapping) => (
                      <TableRow key={mapping.id}>
                        <TableCell>{mapping.employeeName}</TableCell>
                        <TableCell>{mapping.projectName}</TableCell>
                        <TableCell>{mapping.role}</TableCell>
                        <TableCell>
                          <div className="w-[100px]">
                            <Progress value={mapping.allocation} className="h-2" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="w-[100px]">
                            <Progress value={mapping.utilization} className="h-2" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Total Budget</TableHead>
                      <TableHead>Billed Amount</TableHead>
                      <TableHead>Billable Hours</TableHead>
                      <TableHead>Progress</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projectsData.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>₹{project.budget.toLocaleString()}</TableCell>
                        <TableCell>₹{project.billedAmount.toLocaleString()}</TableCell>
                        <TableCell>
                          {employeeProjectMappings
                            .filter((m) => m.projectName === project.name)
                            .reduce((sum, m) => sum + m.billableHours, 0)}
                        </TableCell>
                        <TableCell>
                          <div className="w-[100px]">
                            <Progress value={project.progress} className="h-2" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}