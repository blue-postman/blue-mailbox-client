import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';
declare var Kakao;
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})

export class CardViewComponent implements OnInit {


  public opened: boolean = false

  constructor(
    private router: Router, 
    public db: DataService
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
    // 
    try {
      const self = this;
      Kakao.Auth.login({
        success: function (authObj) {
          let { access_token, refresh_token, token_type, expires_in, scope, refresh_token_expires_in } = authObj;
          Kakao.API.request({
            url: '/v2/user/me',
            success: async (resultObj) => {
              // alert(resultObj);
              console.log(access_token)
              console.log(resultObj.properties)
              const result = await self.db.login_social(resultObj.id + '', access_token);
              self.router.navigateByUrl(`/login-callback/${result}`);
            },
            
            fail: (errorObj) => {
              console.log(errorObj);
              alert(errorObj);
              // self.app.go('login');
            },
            always: () => {
              // loading.dismiss();
            }
          });
        },
        fail: function (err) {
          alert(JSON.stringify(err));
          // self.app.go('');
        }
      });
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }

}
