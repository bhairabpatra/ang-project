import { TestBed } from '@angular/core/testing';

import { ResolveTableGuard } from './resolve-table.guard';

describe('ResolveTableGuard', () => {
  let guard: ResolveTableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResolveTableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
