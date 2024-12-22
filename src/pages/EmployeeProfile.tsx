import { Layout } from "@/components/Layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Users } from "lucide-react";

const employeeData = {
  personal: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    bloodGroup: "O+",
  },
  family: [
    {
      name: "Jane Doe",
      relationship: "Spouse",
      contact: "+1234567891",
      dateOfBirth: "1992-05-15",
    },
    {
      name: "Jimmy Doe",
      relationship: "Child",
      contact: "-",
      dateOfBirth: "2015-03-20",
    },
  ],
  employment: {
    employeeId: "EMP001",
    department: "Engineering",
    designation: "Senior Developer",
    joiningDate: "2023-01-15",
    reportingManager: "Sarah Connor",
    workLocation: "Main Office",
  },
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "Tech University",
      year: "2012",
      specialization: "Computer Science",
    },
    {
      degree: "Master of Science",
      institution: "Advanced Institute",
      year: "2014",
      specialization: "Software Engineering",
    },
  ],
};

export default function EmployeeProfile() {
  return (
    <Layout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employee Profile</h1>
          <Button>Edit Profile</Button>
        </div>

        <Tabs defaultValue="personal">
          <TabsList>
            <TabsTrigger value="personal">
              <User className="mr-2 h-4 w-4" />
              Personal Info
            </TabsTrigger>
            <TabsTrigger value="family">
              <Users className="mr-2 h-4 w-4" />
              Family Details
            </TabsTrigger>
            <TabsTrigger value="employment">
              <Briefcase className="mr-2 h-4 w-4" />
              Employment
            </TabsTrigger>
            <TabsTrigger value="education">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">Name:</span>
                    {employeeData.personal.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">Email:</span>
                    {employeeData.personal.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">Phone:</span>
                    {employeeData.personal.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">Address:</span>
                    {employeeData.personal.address}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family">
            <Card>
              <CardHeader>
                <CardTitle>Family Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Relationship</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Date of Birth</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.family.map((member, index) => (
                      <TableRow key={index}>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.relationship}</TableCell>
                        <TableCell>{member.contact}</TableCell>
                        <TableCell>{member.dateOfBirth}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employment">
            <Card>
              <CardHeader>
                <CardTitle>Employment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Employee ID:</span>
                    {employeeData.employment.employeeId}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Department:</span>
                    {employeeData.employment.department}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Designation:</span>
                    {employeeData.employment.designation}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Joining Date:</span>
                    {employeeData.employment.joiningDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Reporting Manager:</span>
                    {employeeData.employment.reportingManager}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Work Location:</span>
                    {employeeData.employment.workLocation}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education & Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Degree</TableHead>
                      <TableHead>Institution</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Specialization</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.education.map((edu, index) => (
                      <TableRow key={index}>
                        <TableCell>{edu.degree}</TableCell>
                        <TableCell>{edu.institution}</TableCell>
                        <TableCell>{edu.year}</TableCell>
                        <TableCell>{edu.specialization}</TableCell>
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