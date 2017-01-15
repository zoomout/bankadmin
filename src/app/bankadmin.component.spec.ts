import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BankadminAppComponent } from '../app/bankadmin.component';

beforeEachProviders(() => [BankadminAppComponent]);

describe('App: Bankadmin', () => {
  it('should create the app',
      inject([BankadminAppComponent], (app: BankadminAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bankadmin works!\'',
      inject([BankadminAppComponent], (app: BankadminAppComponent) => {
    expect(app.title).toEqual('bankadmin works!');
  }));
});
