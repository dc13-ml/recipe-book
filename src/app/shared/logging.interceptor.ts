import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // note: the console logging is performed AFTER the request is handled
        return next.handle(req)
            .pipe(tap( event => {
                console.log('Logging intercepted: ', event);
            }))
    }
}