import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/graphql/data-services';

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

  public letter = `안녕 하이
  너에게 편지를 쓴다
  잘 받앗길 빈다
  졸리다
  언제끝나지
  할게 넘 많아
  ㅠㅠ
  졸려
  졸렁나이라너ㅣㅏ너리나`

  constructor(
    private db: DataService,
    private route: ActivatedRoute,
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
      alert("잘못된주소")
    }
  }

}
