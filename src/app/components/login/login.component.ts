import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  public users: Array<any> = new Array();

  ngOnInit() {
    this.httpClient
    .get("http://localhost:3000/api/users")
    .subscribe(
      (response: any) => {
        this.users = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
