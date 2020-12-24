import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';
declare var Kakao;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public list = [
    // { label: '내 정보', link: 'my-info'},
    // { label: '보낸 편지', link: 'send-card'},
    { label: '기능요청', link: 'request'},
    { label: 'About', link: 'about'},
    { label: 'Instagram', link: 'insta'},
  ]

  public my
  public opened: boolean = false;
  public sign_opened: boolean = false;

  public my_info_modal: boolean = false;

  constructor(
    private router: Router, 
    private db: DataService,
    private _snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.load_data()
  }

  async load_data(){
    const token = window.localStorage.getItem('token');
    console.log(token)
    if(token){
      this.my = await this.db.my_info();
      console.log(this.my)
    }
  }

  layer_popup_open(){
    this.opened = true;
  }


  layer_popup_close(){
    this.opened = false;
    this.sign_opened = false;
  }

  link_to_main(){
    this.router.navigateByUrl(`/`);
  }

  link_to_page(link){
    this.layer_popup_close()

    if(link == 'about'){
      window.open(`https://github.com/blue-postman`, '_blank');
    }else if(link == 'insta') {
      window.open(`https://www.instagram.com/_blue_mailbox/`, '_blank');
    }else{
      this.router.navigateByUrl(`/${link}`);
    }

    
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

  signup(){
    this.opened = false;
    this.router.navigateByUrl(`/sign-up`);
  }

  logout(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('card_idx');
    
    this.my = null
    this.opened = false;
    this.load_data()

    this._snackBar.open('🥲 로그아웃 되었습니다.', '', {
      duration: 2000,
    });
  }

  open(){
    this.opened = false
    this.my_info_modal = true;
  }
}
