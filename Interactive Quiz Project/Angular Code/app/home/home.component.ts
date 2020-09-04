import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {faDiceD20} from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public faD = faDiceD20;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  pressLogout(){
   
    this.router.navigate(['login']);

  }

}
