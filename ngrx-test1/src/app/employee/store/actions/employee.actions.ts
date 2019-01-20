import { Action } from '@ngrx/store';
import {Employee} from '../states/state';

export enum EmployeeActionTypes {
  LoadEmployees = '[Employee] Load Employees',
  AddEmployees = '[Employee] Add Employees',
  UpdateEmployees = '[Employee] Update Employees',
  DeleteEmployees = '[Employee] Delete Employees'
}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;
}

export class AddEmployees implements Action {
  readonly type = EmployeeActionTypes.AddEmployees;
  public constructor(public payload:Employee) {}
}

export class UpdateEmployees implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployees;
  public constructor(public payload:Employee) {}
}

export class DeleteEmployees implements Action {
  readonly type = EmployeeActionTypes.DeleteEmployees;
  public constructor(public payload:Employee) {}
}

export type EmployeeActions = LoadEmployees | AddEmployees | UpdateEmployees | DeleteEmployees;
