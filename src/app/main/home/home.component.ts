import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public main_img_url; // 메인화면 이미지
  public card_list_pop;
  public card_list_christmas;

  public data_list = [
    { item: 1, src: ''},
    { item: 2, src: ''},
    { item: 3, src: ''},
    { item: 4, src: ''}
  ]

  constructor(
    private router: Router, 
    private db: DataService
  ) { }

  ngOnInit() {
    this.load_data()
  }

  async load_data(){
    const data = await this.db.select_main();
    this.main_img_url = data.main_img.card_img_url;
    this.card_list_pop = data.card_list_pop;
    this.card_list_christmas = data.card_list_christmas;
  }

  link_to_card(){
    this.router.navigateByUrl(`/card`);
  }

  link_to_card_view(card_idx){
    this.router.navigateByUrl(`/card-view/${card_idx}`);
  }
}
