import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])});

  errorMes: string = '';
  loading: boolean = false;

  submitRegForm(regForm: FormGroup) {
    this.loading = true;
    console.log(regForm.value);
    this._AuthService.signIn(regForm.value).subscribe((data) => {
      console.log(data);
      if (data.token) {
        this.loading = false;
        console.log('hii');

        this._Router.navigate(['/home']);
        localStorage.setItem('token', data.token);
        this._AuthService.saveUserData();
      } else {
        console.log((this.errorMes = data.message));
        this.loading = false;
      }
    });
  }
}
