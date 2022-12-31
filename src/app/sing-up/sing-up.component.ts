import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  constructor(private _AuthService: AuthService , private _Router:Router) {

  }

  ngOnInit(): void {
  }

  registerForm: FormGroup  = new FormGroup(
    {
     'name': new FormControl(null,[Validators.required]),
     'email':new FormControl(null,[Validators.required]),
     'number':new FormControl(null,[Validators.required]),
     'password':new FormControl(null,[Validators.required]),
    'password_repeat':new FormControl(null,[Validators.required])
    }
  )

  errorMes: string = '';
  loading: boolean = false;
  submitRegForm(regForm:FormGroup) {

    this.loading = true;
    this._AuthService.signUp(regForm.value).subscribe((data) => {
      if (data.message === 'User created') {
        console.log('tmm');
        console.log(data);
        this.loading = false;
        this._Router.navigate(['/login'])

      }
      else {
        console.log('hii');

        console.log(this.errorMes = data.message);
        this.loading = false;


      }
    })
  }

}
