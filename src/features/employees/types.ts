export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
  status: string;
  joiningDate: string;
}

export interface OnboardingEmployee {
  id: number;
  name: string;
  email: string;
  position: string;
  status: string;
  startDate: string;
}

export interface ExitEmployee {
  id: number;
  name: string;
  department: string;
  resignationDate: string;
  lastWorkingDay: string;
  status: string;
}