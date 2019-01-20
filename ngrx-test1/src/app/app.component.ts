import { Component, OnInit, OnDestroy } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { RootState } from './index';
import { Observable } from 'rxjs';

import { CustomersStore } from './customer/store/reducers/customer.reducer'
import { AddCustomers, UpdateCustomers, DeleteCustomers } from './customer/store/actions/customer.actions';
import { CustomerComponent } from './customer/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngrx-test1';
  storeSubscription: any;

  public constructor(private store$: Store<RootState>) {}

  ngOnInit() {
    this.storeSubscription = this.store$.subscribe(_ => console.log('App Component -- ', _));

    // this.store$.dispatch(new AddCustomers({ id: 20, name: "customer2", role: "role2"}));
    // this.store$.dispatch(new UpdateCustomers({ id: 20, name: "customer2", role: "role3"}));
    // this.store$.dispatch(new DeleteCustomers({ id: 20, name: "customer2", role: "role3"}));

    // this.store$.pipe(CustomersStore);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}
