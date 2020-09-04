import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about-qw',
  templateUrl: './about-qw.component.html',
  styleUrls: ['./about-qw.component.css']
})
export class AboutQwComponent implements OnInit {
  public faInsta = faInstagram;
  public faTwit = faTwitter;
  constructor(public router:Router) { }


  ngOnInit(): void {
  }

}
