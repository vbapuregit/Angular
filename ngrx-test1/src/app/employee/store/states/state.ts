export interface Employee {
    id: number;
    name: string;
    role: string; 
  }
  
  export interface EmployeesState {
   Employees: Employee[]; 
  }
  
  export const initialState: EmployeesState = {
    Employees: [{ id: 10, name: "Employee1", role: "role1"}]
  };
  
  