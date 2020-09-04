import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-js-ans',
  templateUrl: './js-ans.component.html',
  styleUrls: ['./js-ans.component.css']
})
export class JsAnsComponent implements OnInit {
    list:any = [];
    constructor(public router:Router,private http:HttpClient) { }
    async makeCall(){
      const url = "http://localhost:3000/alluser";
      const result = await this.http.get(url).toPromise();
      console.log(result);
      this.list = result;
    }
    ngOnInit(): void {}
  
}
  
  





  
