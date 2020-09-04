import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-error-found',
  templateUrl: './error-found.component.html',
  styleUrls: ['./error-found.component.css']
})
export class ErrorFoundComponent implements OnInit {

  constructor(public router:Router) { }
  makeCall(){
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
  }

}
