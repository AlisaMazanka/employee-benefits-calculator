import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { delay, of } from 'rxjs';
import { MOCK_EMPLOYEE_BENEFITS } from '../../features/benefits-calculator/data-access/mock/benefits.mock';

export const mockApiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const { method, url } = request;

  if(method === 'GET' && url.startsWith('/api/benefits/')) {
    return of(
      new HttpResponse({
        status: 200,
        body: MOCK_EMPLOYEE_BENEFITS,
      }),
    ).pipe(delay(500));
  }

  if(method === 'PUT' && url.startsWith('/api/benefits/')) {
    return of(
      new HttpResponse({
        status: 200,
        body: request.body,
      }),
    ).pipe(delay(500));
  }

  if(method === 'POST' && url.startsWith('/api/calculate')) {
    return of(
      new HttpResponse({
        status: 200,
        body: request.body,
      }),
    ).pipe(delay(500));
  }

  return next(request);
};
