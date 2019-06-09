import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  constructor(
    private httpClient: HttpClient
  ) { }

  public bookingrequests: Array<any> = new Array();

  ngOnInit() {
    this.httpClient
    .get("http://localhost:3000/api/properties/bookings/all")
    .subscribe(
      (response: any) => {
        this.bookingrequests = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}

