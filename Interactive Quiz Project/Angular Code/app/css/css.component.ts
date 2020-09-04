import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  list:any = [];
  constructor(public router:Router,private http:HttpClient) { }
  async makeCall(){
    const url = "http://localhost:5000/";
    const result = await this.http.get(url).toPromise();
    console.log(result);
    this.list = result;
  }
  ngOnInit(): void {}

}
