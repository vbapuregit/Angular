import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './store/reducers/employee.reducer';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature('employees', fromEmployee.reducer)
  ]
})
export class EmployeeModule { }
