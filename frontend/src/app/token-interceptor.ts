import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { LoginResponse } from "./auth/login/LoginResponse.response";
import { AuthService } from "./auth/shared/auth.service";


@Injectable({
providedIn:'root'
})

export class TokenInterception implements HttpInterceptor{
    isTokenRefreshing = false;
    refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);
    constructor(private authservice:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const token: String =  this.authservice.getToken();
     // let rew = this.addToken(req, token);
       if(token){
        console.log(this.addToken(req, token));
        console.log("teste");
       return next.handle(this.addToken(req, token)).pipe(catchError(error => {
        if (error instanceof HttpErrorResponse
            && error.status === 403) {
            return this.handleAuthErrors(req, next);
        } else {
            return throwError(error);
        }
    }));
    }

    return next.handle(req);

}

    private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
    if (!this.isTokenRefreshing) {
        this.isTokenRefreshing = true;
        this.refreshTokenSubject.next(null);

        return this.authservice.refreshToken().pipe(
            switchMap((refreshTokenResponse: LoginResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                    .next(refreshTokenResponse.userToken);
                return next.handle(this.addToken(req,
                    refreshTokenResponse.userToken));
            })
        )
    } else {
        return this.refreshTokenSubject.pipe(
            filter(result => result !== null),
            take(1),
            switchMap((res) => {
                return next.handle(this.addToken(req,
                    this.authservice.getToken()))
            })
        );
    }
}
    addToken(req: HttpRequest<any>, token: String) {
        return req.clone({
            headers: req.headers.set("Authorization","Bearer "+token)
        });
    }

}
