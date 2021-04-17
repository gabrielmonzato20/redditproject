import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUpPayLoudRequest } from '../sigup/signup.payloud';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { LoginPayloadRequest } from '../login/login.payload';
import {environment} from "../../../environments/environment"
import { LoginResponse } from '../login/LoginResponse.response';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

     refreshTokenPayload:Object = {
      refrashToken: this.getRefreshToken(),
      userName : this.getUsername()
    }

  constructor(private httpClient: HttpClient,private sessionStorage:SessionStorageService,private localStorage:LocalStorageService) { }

signup(signupPayload: SignUpPayLoudRequest): Observable<any>{
  let headers = {
    responseType:"text"
  }
return  this.httpClient.post(environment.apiUrl+"/api/auth/signup",signupPayload,{
  responseType:"text"
});



}
Login(loginPayload:LoginPayloadRequest):Observable<Boolean>{
  return this.httpClient.post<LoginResponse>(environment.apiUrl+"/api/auth/login",loginPayload,
).pipe(map(response =>{

this.localStorage.store("authentication",response.userToken);
this.localStorage.store("username",response.userName);
this.localStorage.store("refrasToken",response.refreshToken);
this.localStorage.store("expiredAt",response.expiresAt);
return true;
})
);

}
getToken():String{
  return this.localStorage.retrieve("authentication");
}
getRefreshToken():String{
  return this.localStorage.retrieve("refrasToken");
}
getUsername():String{
  return this.localStorage.retrieve("username");
}

refreshToken() {
return this.httpClient.post<LoginResponse>(environment.apiUrl+"/api/auth/refrash/token"
,this.refreshTokenPayload).pipe(tap(resp =>{
  this.localStorage.store("authentication",resp.userToken);
  this.localStorage.store("expiredAt",resp.expiresAt);
}
)
)
}
}

