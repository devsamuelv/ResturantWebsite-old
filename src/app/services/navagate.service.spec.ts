import { TestBed } from '@angular/core/testing';

import { NavagateService } from './navagate.service';

describe('NavagateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavagateService = TestBed.get(NavagateService);
    expect(service).toBeTruthy();
  });
});
