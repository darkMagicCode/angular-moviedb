import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiIntercInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqst = request.clone({
     url: request.url.replace('api_key=','api_key=16e5f62cf801b1d8b2bda7b0c2a81953' )
    })
    return next.handle(reqst);
  }
}
