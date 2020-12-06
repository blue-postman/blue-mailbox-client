import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  public opened: boolean = false

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }

  select_card(){
    this.opened = true;
  }

  close_popup(){
    this.opened = false;
  }

  login_kakao(){
    console.log("ㅋㅏ카오로그인")
    this.router.navigateByUrl(`/write-card`);
  }

}
