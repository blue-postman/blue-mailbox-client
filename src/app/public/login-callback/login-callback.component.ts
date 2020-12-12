import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss']
})
export class LoginCallbackComponent implements OnInit {

  public token;

  constructor( private route: ActivatedRoute, private _router: Router,  ) { 
    this.token = this.route.snapshot.params['token'];
  }

  ngOnInit() {
    const login = window.localStorage.setItem('token', this.token);
    const card_idx = window.localStorage.getItem('card_idx')
    if(this.isLogin()&&card_idx){
      this._router.navigateByUrl(`/write-card/${card_idx}`);
    }else if(!card_idx){
      this._router.navigateByUrl('/home')
    }
    
  }

  isLogin() {
    let token = window.localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

}
