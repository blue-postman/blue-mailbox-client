import { Component, OnInit } from '@angular/core';
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
    { label: '보낸 편지', link: ''},
    { label: '기능요청', link: ''},
    { label: 'About', link: ''},
  ]

  public my
  public opened: boolean = false;
  public sign_opened: boolean = false;
  constructor(
    private router: Router, 
    private db: DataService
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
    this.router.navigateByUrl(`/${link}`);
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
    this.my = null
    this.opened = false;
    this.load_data()
  }
}
