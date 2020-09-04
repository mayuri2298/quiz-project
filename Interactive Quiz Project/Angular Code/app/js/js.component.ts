import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {
  list:any = [];
  constructor(public router:Router,private http:HttpClient) { }
  async makeCall(){
    const url = "http://localhost:3000/alluser";
    const result = await this.http.get(url).toPromise();
    console.log(result);
    this.list = result;
  }

  ngOnInit(): void {
  }

}
