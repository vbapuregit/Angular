import { ActionReducerMap } from '@ngrx/store';
import { reducer } from '../reducers/customer.reducer';

export interface Customer {
    id: number;
    name: string;
    role: string; 
  }
  
  export interface CustomersState {
   Customers: Customer[]; 
  }
  
  export const initialState: CustomersState = {
    Customers: [{ id: 10, name: "customer1", role: "role1"}]
  };
  
  