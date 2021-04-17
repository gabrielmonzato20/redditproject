import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { LoginPayloadRequest } from './login.payload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginPayload:LoginPayloadRequest;
  msgSucess:string;
  isError:boolean;
  constructor(private authService:AuthService,private router:Router, private toastr:ToastrService
    ,private activedRouter:ActivatedRoute) {
this.loginPayload = {
  userName:'',
  passworld:'',
}
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',Validators.required)
    });

    this.activedRouter.queryParams.subscribe(param =>{
      if(param.register!== undefined && param.register == 'true' ){
        this.toastr.success("Signup Sucessful");
        this.msgSucess = "Please Check your inbox for the email ,active your account";
      }
    })
  }
login(){
  this.loginPayload.userName = this.loginForm.get("username").value;
  this.loginPayload.passworld = this.loginForm.get("password").value;

this.authService.Login(this.loginPayload).subscribe(data =>{
 if(data){
   this.isError = false;
   this.router.navigateByUrl('');
   this.toastr.success("login sucessful");

 }else{
   this.isError=true;
   throwError(this.isError);

 }
})

}
}