import { TestBed } from '@angular/core/testing';

import { CartNewService } from './cart-new.service';

describe('CartNewService', () => {
  let service: CartNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
