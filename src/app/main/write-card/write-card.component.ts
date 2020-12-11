import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/graphql/data-services';

@Component({
  selector: 'app-write-card',
  templateUrl: './write-card.component.html',
  styleUrls: ['./write-card.component.scss']
})
export class WriteCardComponent implements OnInit {

  public card_idx;
  public card_data;
  
  public font_list = [
    { name: '애플고딕' },
    { name: '산돌고딕' },
    { name: '귀찮딕' },
    { name: '귀차나ㅓ' },
    { name: 'ㅣ힝딕' }
  ]

  public color_list = [
    { color: '#ffff' },
    { color: '#dfdfdd' },
    { color: '#aacc' },
    { color: '#eedd' },
    { color: '#84BE90' },
    { color: '#EC6E6E' },
    { color: '#EEA8FF' },
    { color: '#7CB2D0' },
    { color: '#BAD07C' },
    { color: '#A6A99D' },
    { color: '#BADD' },
    { color: '#FFCC49' },
    { color: '#ED7086' },
    { color: '#ffff' },
    { color: '#C4D4B7' },
  ]

  public opened:boolean = false;

  constructor(
    private route: ActivatedRoute,
    public db: DataService,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.card_idx = Number(params.card_idx);
    this.load_data();
  }

  async load_data(){
    this.card_data = await this.db.card_view_info(this.card_idx);
  }

  open_popup(){
    this.opened = true
  }

  close_popup(){
    this.opened = false;
  }

  select_color(){
    this.close_popup()
  }
}
