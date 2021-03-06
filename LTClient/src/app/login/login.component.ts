import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private  auth:  AuthService, private router: Router) {}

  ngOnInit() { 
    //if user is already logged in, redirect
    this.auth.isAuthenticated$.subscribe(res => {
      if(res){this.router.navigate(["/content"]);}
    });
  }

}
