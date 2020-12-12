import { Component, OnInit } from '@angular/core';
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
    private db: DataService
  ) { }

  async ngOnInit() {

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

}
