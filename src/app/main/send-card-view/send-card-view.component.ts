import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';
import * as copy from 'copy-to-clipboard';
import { MatSnackBar } from '@angular/material';
declare var Kakao;
@Component({
  selector: 'app-send-card-view',
  templateUrl: './send-card-view.component.html',
  styleUrls: ['./send-card-view.component.scss']
})
export class SendCardViewComponent implements OnInit {

  public card_idx;
  public card_data;
  public card_item;

  public opened:boolean = false;
  public url

  constructor(
    private route: ActivatedRoute,
    public db: DataService,
    private router: Router, 
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.card_idx = Number(params.card_idx);


    this.load_data();
  }

  async load_data(){

    this.card_data = await this.db.write_card_list();

    for(let item of this.card_data){
      if(item.card_idx == this.card_idx){
        this.card_item = item;
      }
    }


    this.url = `http://blue-mailbox.xyz/mail-box/${this.card_item.card_send_code}`
    console.log(this.url)
  }

  go_back(){
    this.router.navigateByUrl(`/send-card`);
  }

  share_to(){
    this.opened = true;
  }

  click(){

    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: `${this.card_item.user_name}님이 보낸 따뜻한 카드 도착!`,
        description: `💌 당신에게 '${this.card_item.card_title}' 카드가 도착했습니다 얼른 확인하러가보세요!`,
        imageUrl: this.card_item.card_img_url,
        link: {
          mobileWebUrl: this.url,
          webUrl: this.url
        }
      },
      // social: {
      //   likeCount: 286,
      //   commentCount: 45,
      //   sharedCount: 845
      // },
      buttons: [
        {
          title: '지금 보러가기!',
          link: {
            mobileWebUrl: this.url,
            webUrl: this.url
          }
        }
      ]
    });
  }
  copy_to(){
    copy(this.url)

    this._snackBar.open('😎 주소가 복사 되었습니다. 얼른 공유해주세요!', '', {
      duration: 2000,
    });
  }

  close_popup(){
    this.opened = false;
  }
}
