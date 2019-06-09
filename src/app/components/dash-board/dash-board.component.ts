import { Component, OnInit } from '@angular/core';
// import { Property } from 'src/app/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})

export class DashBoardComponent implements OnInit {
  constructor(
    private httpClient: HttpClient
  ) { }

  public properties: Array<any> = new Array();

  ngOnInit() {
    this.httpClient
    .get("http://localhost:3000/api/properties")
    .subscribe(
      (response: any) => {
        this.properties = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}