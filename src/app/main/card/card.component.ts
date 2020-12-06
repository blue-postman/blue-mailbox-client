import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public show: boolean = false;
  public data_list = [
    { item: 1, src: ''},
    { item: 2, src: ''},
    { item: 3, src: ''},
    { item: 4, src: ''},
    { item: 3, src: ''},
    { item: 3, src: ''},
    { item: 3, src: ''},
    { item: 3, src: ''},
    { item: 3, src: ''},
    { item: 3, src: ''},
    { item: 3, src: ''}
  ]

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  search_card(){
    this.show = true;
  }

  link_to_card_view(item){
    this.router.navigateByUrl(`/card-view`);
  }
}
