import { Component, OnInit } from '@angular/core';


import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public faD = faDiceD20;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async loginProcessHere() {
    const data = this.fbFormGroup.value;

  
    const url = 'http://localhost:3000/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
 
