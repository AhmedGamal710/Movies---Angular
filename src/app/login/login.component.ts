import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthapiService } from '../services/authapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _AuthapiService:AuthapiService, private _Router:Router) {}
  isLoading:boolean = false;
  msgError!:string
  logInForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z][\w]{1,10}$/),
    ]),
  });
  submitLogIn(formData: FormGroup) {
    this.isLoading = true;
    this._AuthapiService.sendLogIn(formData.value).subscribe({
      next:(respone)=> {
        console.log(respone.message);
        if(respone.message === 'success') {
          localStorage.setItem('userTokenMovie',respone.token)
          this._AuthapiService.saveUserData();
         this._Router.navigate(['/home'])
        } else {
         this.msgError = respone.message  
        }
      },complete:()=> {
        this.isLoading = false;
      }
    })

  }
  ngOnInit(): void {}
}
