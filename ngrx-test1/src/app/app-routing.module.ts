import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "customers"},
  {path: "customers", loadChildren: "./customer/customer.module#CustomerModule"},
  {path: "employees", loadChildren: "./employee/employee.module#EmployeeModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
