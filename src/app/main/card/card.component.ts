import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public show: boolean = false;
  public data_list = []

  public keyword;

  constructor(
    private router: Router, 
    public db: DataService,
  ) { }

  async ngOnInit() {
    // const temp = await this.db.my_info();
    // console.log(temp)
  }

  async search_card(){
    this.show = true;
    this.data_list = await this.db.card_search(this.keyword);
  }

  link_to_card_view(item){
    this.router.navigateByUrl(`/card-view`);
  }
}
