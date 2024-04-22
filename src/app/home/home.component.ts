import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //message ='';
  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    this.http.get('http://localhost:4000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        //this.message = `Hi ${res.name}`;
      },
      err => {
        //this.message = 'You are not logged in';
      }
    );
  }
}
