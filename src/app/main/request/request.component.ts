import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/graphql/data-services';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  public contents

  constructor(
    private db: DataService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

  }

  async add_request(){

    const data = {
      contents: this.contents
    }

    await this.db.add_request(data);

    this._snackBar.open('감사합니다 💙 내용 잘 저장되었습니다. ', '', {
      duration: 2000,
    });

    this.contents = null

  }

}
