import { Employee, OnboardingEmployee, ExitEmployee } from './types';

export const employeesData: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    designation: "Senior Developer",
    status: "Active",
    joiningDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "HR",
    designation: "HR Manager",
    status: "Active",
    joiningDate: "2023-02-01",
  },
];

export const onboardingData: OnboardingEmployee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    position: "UI Designer",
    status: "Documentation Pending",
    startDate: "2024-04-01",
  },
];

export const exitData: ExitEmployee[] = [
  {
    id: 1,
    name: "Bob Wilson",
    department: "Marketing",
    resignationDate: "2024-03-15",
    lastWorkingDay: "2024-04-15",
    status: "Exit Interview Pending",
  },
];