// this is the global http interceptor that is used to handle all error
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from './message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router: Router,
    private _message: MessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {


        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
          } else {
            switch (error.status) {
              case 0:
                this._message.setMessage('Sorry we are experiencing technical hiccup at the moment. Please try again later!')
                break;
              case 401:
                this._message.setMessage(error.error.details);
                break;
              case 400:
                let err_msg = '';
                const error_details = error.error.error;
                if (typeof error_details !== 'string') {
                  if (error_details.hasOwnProperty('non_field_errors')) {
                    err_msg = error_details['non_field_errors'];
                  }
                } else {
                  err_msg = error_details;
                }
                this._message.setMessage(err_msg)

                break;
              case 404:
                this._message.setMessage('Not found!');
                break;

              case 500:
                this._message.setMessage('Sorry we are experiencing technical hiccup at the moment. Please try again later!')
                break;
              case 405:
                this._message.setMessage('Sorry we are experiencing technical hiccup at the moment. Please try again later!')
                break;
              case 520:
                this._message.setMessage('Sorry we are experiencing technical hiccup at the moment. Please try again later!');
                break;
            }
            this._message.showError();
          }
        } else {

        }
        return throwError(error);
      })
    );
  }
}
