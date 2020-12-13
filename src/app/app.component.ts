import { Component } from '@angular/core';
import { DataService } from 'src/graphql/data-services';
const Snowflakes = require('magic-snowflakes');

declare var Kakao;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '💌 파란우체통 : 편지로 마음을 전해주세요!';

  constructor(
    public db: DataService,
  ) { }

  async ngOnInit() {
    Kakao.init('0b8e7cd27baa620364eb9d8aac322f32');

    let broswerInfo = navigator.userAgent;
    if(broswerInfo.indexOf("app_pomelove")>-1 || broswerInfo.indexOf("iPhone")>-1|| broswerInfo.indexOf("Android")>-1){
    }else{
      Snowflakes();
    }
  }
}
