import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router){
  }
  loginForm: FormGroup | any;
  submitted = false;
  errorMessage = '';
  isLoggedin = false;
  isLoginFailed = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmit(){
    this.submitted = true;
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      data => {
        console.log(data);
        this.isLoggedin = true
        this.router.navigate(['dashboard']);
      },
      error=>{
        console.log(error);
        this.errorMessage = error;
        this.isLoggedin = false;
        this.isLoginFailed = true;
      }
    );
  }

}
