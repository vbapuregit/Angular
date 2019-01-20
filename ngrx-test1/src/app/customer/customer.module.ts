import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCustomer from './store/reducers/customer.reducer';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    StoreModule.forFeature('customers', fromCustomer.reducer)
  ]
})
export class CustomerModule { }
