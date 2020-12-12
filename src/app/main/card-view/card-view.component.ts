import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';
declare var Kakao;
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})

export class CardViewComponent implements OnInit {
  public opened: boolean = false
  public card_idx;
  public card_data;

  constructor(
    private router: Router, 
    public db: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.card_idx = Number(params.card_idx)
    this.load_data()
  }

  async load_data(){
    console.log(this.card_idx)
    this.card_data = await this.db.card_view_info(this.card_idx);
  }

  select_card(card_idx){
    if(!this.check_token()){
      this.opened = true;
      window.localStorage.setItem('card_idx', card_idx)
    }else{
      this.router.navigateByUrl(`/write-card/${card_idx}`);
    }
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

  check_token(){
    const token = window.localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }

}
