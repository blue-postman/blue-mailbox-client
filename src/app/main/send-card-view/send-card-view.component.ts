import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/graphql/data-services';

@Component({
  selector: 'app-send-card-view',
  templateUrl: './send-card-view.component.html',
  styleUrls: ['./send-card-view.component.scss']
})
export class SendCardViewComponent implements OnInit {

  public card_idx;
  public card_data;
  public card_item;

  constructor(
    private route: ActivatedRoute,
    public db: DataService,
    private router: Router, 
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.card_idx = Number(params.card_idx);


    this.load_data();
  }

  async load_data(){

    this.card_data = await this.db.write_card_list();

    for(let item of this.card_data){
      if(item.card_idx == this.card_idx){
        this.card_item = item;
      }
    }

    console.log(this.card_item)
  }

  go_back(){
    this.router.navigateByUrl(`/send-card`);
  }
}
