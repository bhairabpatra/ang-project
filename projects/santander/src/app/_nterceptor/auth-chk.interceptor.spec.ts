import { TestBed } from '@angular/core/testing';

import { AuthChkInterceptor } from './auth-chk.interceptor';

describe('AuthChkInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthChkInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthChkInterceptor = TestBed.inject(AuthChkInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
