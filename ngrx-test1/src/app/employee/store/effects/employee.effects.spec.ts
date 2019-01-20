import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EmployeeEffects } from './employee.effects';

describe('EmployeeEffects', () => {
  let actions$: Observable<any>;
  let effects: EmployeeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(EmployeeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
