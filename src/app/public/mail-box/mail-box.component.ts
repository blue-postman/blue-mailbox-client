import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';
import * as copy from 'copy-to-clipboard';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {

  public mailbox: boolean = false;
  public main_img_url;
  public card: boolean = false;

  public send_code;
  public card_data;

  public url;

  public opened:boolean = false;

  constructor(
    private db: DataService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router, 
  ) { }

  async ngOnInit() {

    const params = this.route.snapshot.params;
    this.send_code = params.send_code;

    this.select_card_code()

    const data = await this.db.select_main();
    this.main_img_url = data.main_img.card_img_url;

  }


  click_mailbox(){
    this.mailbox = true;

    if(this.mailbox){
      setInterval(() => {
        this.card = true;
      }, 2000);
    }
  }

  async select_card_code(){
    this.card_data = await this.db.select_write_card(this.send_code);
    
    if(!this.card_data){
      this._snackBar.open('잘못된 접근입니다 🥲', '', {
        duration: 2000,
      });
      this.go_home();
    }
  }

  async emotion_btn(num){

    let message;

    if(num==1) {
      message = '💙💙💙 감동했어요!';
    } else if (num==2){
      message = '💛💛💛 고마워요!';
    } else {
      message = '💜💜💜 센스만점!';
    }

    this._snackBar.open(message, '', {
      duration: 1000,
    });
  }

  close_popup(){
    this.opened = false;
  }

  share_to(){
    this.opened = true;
    this.url = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
  }

  copy_to(){
    copy(this.url)

    this._snackBar.open('😎 주소가 복사 되었습니다. 얼른 공유해주세요!', '', {
      duration: 2000,
    });
  }

  go_home(){
    this.router.navigateByUrl(`/home`);
  }
}


