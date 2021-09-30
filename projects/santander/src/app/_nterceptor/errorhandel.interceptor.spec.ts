import { TestBed } from '@angular/core/testing';

import { ErrorhandelInterceptor } from './errorhandel.interceptor';

describe('ErrorhandelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorhandelInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorhandelInterceptor = TestBed.inject(ErrorhandelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
