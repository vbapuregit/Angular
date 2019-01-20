import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersState } from './store/states/state';
import { AddCustomers, UpdateCustomers, DeleteCustomers } from './store/actions/customer.actions';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  storeSubscription: any;


  constructor(private store$: Store<CustomersState>) { }

  ngOnInit() {
    this.storeSubscription = this.store$.subscribe(_ => console.log('Customer Component', _));

    console.log('Customer Component -- Add Customer');
    this.store$.dispatch(new AddCustomers({ id: 20, name: "customer2", role: "role2"}));
    console.log('Customer Component -- Update Customer');
    this.store$.dispatch(new UpdateCustomers({ id: 20, name: "customer2", role: "role3"}));
    console.log('Customer Component -- Delete Customer');
    this.store$.dispatch(new DeleteCustomers({ id: 20, name: "customer2", role: "role3"}));
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
