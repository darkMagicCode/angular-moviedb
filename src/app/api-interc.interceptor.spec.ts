import { TestBed } from '@angular/core/testing';

import { ApiIntercInterceptor } from './api-interc.interceptor';

describe('ApiIntercInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiIntercInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiIntercInterceptor = TestBed.inject(ApiIntercInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
