import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public list = [
    { label: '내 정보', link: 'my-info'},
    { label: '보낸 편지', link: 'send-card'},
    { label: '기능요청', link: 'ready'},
    { label: 'About', link: 'about'},
  ]

  public opened: boolean = false;

  constructor(
    private router: Router, 
  ) { }

  ngOnInit() {
  }


  layer_popup_open(){
    this.opened = true;
  }


  layer_popup_close(){
    this.opened = false;
  }

  link_to_main(){
    this.router.navigateByUrl(`/`);
  }

  link_to_page(link){
    this.layer_popup_close()
    this.router.navigateByUrl(`/${link}`);
  }
  
}
