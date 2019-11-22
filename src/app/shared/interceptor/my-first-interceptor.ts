import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MyFirstInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService){}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const myToken = 'XXXXXC';
    let requestClonata = request.clone(
      {headers: request.headers.set('Authorization', 'Bearer ' + myToken)}
    );

    if (!request.headers.has('Content-Type')) {
      requestClonata = requestClonata.clone(
         { headers: requestClonata.headers.set(
          'Content-Type', 'application/json')}
      );
    }

    console.log(requestClonata);
    return next.handle(requestClonata).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse){
          console.log('>>>>>>>>>>>>>> Response');
          console.log(event);
          this.toastr.success('ok!!!', 'Toastr fun!');
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastr.error('Errore!!!', 'Toastr fun!');
        console.log('>>> ERROR');
        if (error.status === 404) {
          console.log(error.status);
        } else {
        }
        return throwError(error);
      })
    );

  }
}
