import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data_list = [
    { item: 1, src: ''},
    { item: 2, src: ''},
    { item: 3, src: ''},
    { item: 4, src: ''}
  ]

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  link_to_card(){
    this.router.navigateByUrl(`/card`);
  }
}
