import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthapiService } from '../services/authapi.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private _AuthapiService:AuthapiService, private _Router:Router) {}
  isLoading:boolean = false;
  msgError!:string
  signUpForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(80),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Z][\w]{1,10}$/),
    ]),
  });
  submitSignUp(formData: FormGroup) {
    this.isLoading = true;
    this._AuthapiService.sendSignUp(formData.value).subscribe({
      next:(respone)=> {
        console.log(respone.message);
        if(respone.message === 'success') {
         this._Router.navigate(['/login'])
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
