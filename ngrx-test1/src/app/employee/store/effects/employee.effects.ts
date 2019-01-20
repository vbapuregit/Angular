import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EmployeeActionTypes } from '../actions/employee.actions';

@Injectable()
export class EmployeeEffects {

  @Effect()
  loadEmployees$ = this.actions$.pipe(ofType(EmployeeActionTypes.LoadEmployees));

  constructor(private actions$: Actions) {}
}
