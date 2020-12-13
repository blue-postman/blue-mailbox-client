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

  public font;
  public card_content = '';

  public url;
  
  public font_list = [
    { name: '마루부리', value: "'MaruBuri-Regular'" },
    { name: '닉스곤폰트M', value: "'NIXGONM-Vb'" },
    { name: '조선일보명조체', value: "'Chosunilbo_myungjo'" },
    { name: '마포꽃섬', value: "'MapoFlowerIsland'" },
    { name: '넥슨배찌체', value: "'Bazzi'" },
    { name: '카페24 고운밤', value: "'Cafe24Oneprettynight'" },
    { name: '빙그레체', value: "'Binggrae-Bold'" },
    { name: '배민한나체', value: "'BMHANNAAir'" },
    
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
    this.font = this.font_list[0].value
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

  select_font(val){
    console.log(val)
    for(let item of this.font_list){
      if(val==item.name){
        this.font = item.value
      }
    }
  }


  // 카드 다 작성했어요!
  async write_card_complete(){

    if(this.card_content == ''){
      alert("내용을 작성해주세요!");
      return;
      // this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
    }
    
    this.opened = true;

  
    const data = {
      card_idx: Number(this.card_idx),
      card_contents: this.card_content,
      card_font: this.font
    }

    const code = await this.db.write_to_card(data)
    console.log(code)
    this.url = `http://localhost:4200/mail-box/${code}`
  }
}
