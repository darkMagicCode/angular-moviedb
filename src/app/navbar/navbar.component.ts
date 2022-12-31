import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;
  currentx: boolean = false;

  constructor(private _AuthService: AuthService ) {  }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if(this._AuthService.userData.getValue() != null ) {
      console.log('hey1234');

      this.isLogin = true;
    } else {
        this.isLogin = false;
        console.log('hii');

    }
  }
);


  }
  logout(){
    this._AuthService.signout();

 }

}
