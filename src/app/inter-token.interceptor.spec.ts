import { TestBed } from '@angular/core/testing';

import { InterTokenInterceptor } from './inter-token.interceptor';

describe('InterTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterTokenInterceptor = TestBed.inject(InterTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
