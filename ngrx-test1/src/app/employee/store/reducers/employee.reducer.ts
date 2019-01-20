import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeActions, EmployeeActionTypes } from '../actions/employee.actions';
import {Employee, EmployeesState, initialState} from '../states/state';


export function reducer(state = initialState, action: EmployeeActions): EmployeesState {
  switch (action.type) {

    case EmployeeActionTypes.LoadEmployees:
      return {
        ...state
      };

    case EmployeeActionTypes.AddEmployees:
      return {
        Employees: [...state.Employees, action.payload] 
      };

    case EmployeeActionTypes.UpdateEmployees:
      const updatedEmployees = state.Employees.map(_ => {
        if(_.id === action.payload.id) {
            _ = action.payload
        }
        return _;
      });

      return {
        Employees: updatedEmployees
      };

    case EmployeeActionTypes.DeleteEmployees:
      const deletedEmployees = state.Employees.filter(_ => _.id !== action.payload.id);

      return {
        Employees: deletedEmployees
      };

    default:
      return state;
  }
}

export const EmployeesStore = createFeatureSelector<EmployeesState>('employees');

export const EmployeeNames = createSelector(
  EmployeesStore,
  (state) => {
    const names = state.Employees.map(_ => _.name);
    return names;
  } 
)

