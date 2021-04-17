import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { SignUpPayLoudRequest } from './signup.payloud';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
  signupPayloud :SignUpPayLoudRequest;
  signup: FormGroup;
  constructor(private authService: AuthService, private router:Router,private toastr: ToastrService) { 
    this.signupPayloud ={
      userName: '',
      passWorld: '', 
      email: ''
    }
  }

  ngOnInit(): void {
    this.signup = new FormGroup({
      username: new  FormControl("",Validators.required),
      email: new  FormControl("",[Validators.required,Validators.email]),
      password: new  FormControl("",Validators.required),

    });
      
    }
    signupLogin(){
      this.signupPayloud.email = this.signup.get('email').value;
      this.signupPayloud.passWorld= this.signup.get("password").value;
      this.signupPayloud.userName = this.signup.get("username").value ;

      this.authService.signup(this.signupPayloud).subscribe(
        auth => {
          this.router.navigate(['/login'],{queryParams:{register:'true'}});
        },error =>{
          console.log(error);
          this.toastr.error("Faild to register ! Please try again");
        }
      );
    }
  }

