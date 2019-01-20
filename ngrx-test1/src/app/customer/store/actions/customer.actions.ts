import { Action } from '@ngrx/store';
import {Customer} from '../states/state';

export enum CustomerActionTypes {
  LoadCustomers = '[Customer] Load Customers',
  AddCustomers = '[Customer] Add Customers',
  UpdateCustomers = '[Customer] Update Customers',
  DeleteCustomers = '[Customer] Delete Customers'
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class AddCustomers implements Action {
  readonly type = CustomerActionTypes.AddCustomers;
  public constructor(public payload:Customer) {}
}

export class UpdateCustomers implements Action {
  readonly type = CustomerActionTypes.UpdateCustomers;
  public constructor(public payload:Customer) {}
}

export class DeleteCustomers implements Action {
  readonly type = CustomerActionTypes.DeleteCustomers;
  public constructor(public payload:Customer) {}
}

export type CustomerActions = LoadCustomers | AddCustomers | UpdateCustomers | DeleteCustomers;
