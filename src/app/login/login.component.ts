import { Component, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

@Injectable()
export class LoginComponent {
  loginForm=this.formBuilder.group({password:""})
  errorString:string="";

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  login(){
    if(this.loginForm.value.password===localStorage.getItem("password")){
      this.errorString="Login Success"
      this.router.navigateByUrl("/dashboard")
      localStorage.setItem("loggedInPassphrase",(this.loginForm.value.password || ""))
    }else{
      this.errorString="Passphrase didn't match"
    }
  }
}
