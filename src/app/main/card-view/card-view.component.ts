import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  public opened: boolean = false

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  select_card(){
    this.opened = true;
  }

  close_popup(){
    this.opened = false;
  }

  login_kakao(){
    console.log("ㅋㅏ카오로그인")
    // this.router.navigateByUrl(`/write-card`);
    // try {
    //   const self = this;
    //   Kakao.Auth.login({
    //     success: function (authObj) {
    //       let { access_token, refresh_token, token_type, expires_in, scope, refresh_token_expires_in } = authObj;
    //       Kakao.API.request({
    //         url: '/v2/user/me',
    //         success: async (resultObj) => {
    //           console.log(resultObj);
    //           const result = await self.db.login_social('kakao', resultObj.id + '', access_token);
    //           console.log(result);
    //           this._router.navigateByUrl('/login-callback/' + result);
    //         },
    //         fail: (errorObj) => {
    //           console.log(errorObj);
    //           alert(errorObj);
    //           // self.app.go('login');
    //         },
    //         always: () => {
    //           // loading.dismiss();
    //         }
    //       });
    //     },
    //     fail: function (err) {
    //       alert(JSON.stringify(err));
    //       self.app.go('');
    //     }
    //   });
    // } catch (e) {
    //   console.log(e);
    //   alert(e);
    // }
  }

}
