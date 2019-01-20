import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeesState } from './store/states/state';
import { AddEmployees, UpdateEmployees, DeleteEmployees } from './store/actions/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  storeSubscription: any;


  constructor(private store$: Store<EmployeesState>) { }

  ngOnInit() {
    this.storeSubscription = this.store$.subscribe(_ => console.log('Employee Component', _));
  }

  updateEmployeeStore() {
    console.log('Employee Component -- Add Employee');
    this.store$.dispatch(new AddEmployees({ id: 20, name: "employee2", role: "role2"}));
    console.log('Employee Component -- Update Employee');
    this.store$.dispatch(new UpdateEmployees({ id: 20, name: "employee2", role: "role3"}));
    console.log('Employee Component -- Delete Employee');
    this.store$.dispatch(new DeleteEmployees({ id: 20, name: "employee2", role: "role3"}));
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }


}
