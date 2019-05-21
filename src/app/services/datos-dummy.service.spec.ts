import { TestBed } from '@angular/core/testing';

import { DatosDummyService } from './datos-dummy.service';

describe('DatosDummyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosDummyService = TestBed.get(DatosDummyService);
    expect(service).toBeTruthy();
  });
});
