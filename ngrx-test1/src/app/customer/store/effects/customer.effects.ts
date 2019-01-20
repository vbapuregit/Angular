import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerActionTypes } from '../actions/customer.actions';

@Injectable()
export class CustomerEffects {

  @Effect()
  loadCustomers$ = this.actions$.pipe(ofType(CustomerActionTypes.LoadCustomers));

  constructor(private actions$: Actions) {}
}
