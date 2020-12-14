import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';

@Component({
  selector: 'app-send-card',
  templateUrl: './send-card.component.html',
  styleUrls: ['./send-card.component.scss']
})
export class SendCardComponent implements OnInit {

  public card_data;
  public my;
  public card_item;

  constructor(
    public db: DataService,
    private router: Router, 
  ) { }

  async ngOnInit() {
    this.load_data()
  }

  async load_data(){
    this.my = await this.db.my_info();
    this.card_data = await this.db.write_card_list();
  }

  card_view(card_idx){
    this.router.navigateByUrl(`/send-card-view/${card_idx}`);
  }

}
