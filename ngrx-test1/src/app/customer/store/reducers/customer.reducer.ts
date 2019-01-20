import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerActions, CustomerActionTypes } from '../actions/customer.actions';
import {Customer, CustomersState, initialState} from '../states/state';


export function reducer(state = initialState, action: CustomerActions): CustomersState {
  switch (action.type) {

    case CustomerActionTypes.LoadCustomers:
      return {
        ...state
      };

    case CustomerActionTypes.AddCustomers:
      return {
        Customers: [...state.Customers, action.payload] 
      };

    case CustomerActionTypes.UpdateCustomers:
      const updatedCustomers = state.Customers.map(_ => {
        if(_.id === action.payload.id) {
            _ = action.payload
        }
        return _;
      });

      return {
        Customers: updatedCustomers
      };

    case CustomerActionTypes.DeleteCustomers:
      const deletedCustomers = state.Customers.filter(_ => _.id !== action.payload.id);

      return {
        Customers: deletedCustomers
      };

    default:
      return state;
  }
}

export const CustomersStore = createFeatureSelector<CustomersState>('customers');

export const CustomerNames = createSelector(
  CustomersStore,
  (state) => {
    const names = state.Customers.map(_ => _.name);
    return names;
  } 
)

