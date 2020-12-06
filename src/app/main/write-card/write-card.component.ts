import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-card',
  templateUrl: './write-card.component.html',
  styleUrls: ['./write-card.component.scss']
})
export class WriteCardComponent implements OnInit {

  public font_list = [
    { name: '애플고딕' },
    { name: '산돌고딕' },
    { name: '귀찮딕' },
    { name: '귀차나ㅓ' },
    { name: 'ㅣ힝딕' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
