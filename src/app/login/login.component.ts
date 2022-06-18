import { Component, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

@Injectable()
export class LoginComponent {
  loginForm=this.formBuilder.group({password:""})
  errorString:string="";

  constructor(private formBuilder:FormBuilder) { }

  login(){
    if(this.loginForm.value.password===localStorage.getItem("password")){
      this.errorString="Login Success"
    }else{
      this.errorString="Passphrase didn't match"
    }
  }
}
