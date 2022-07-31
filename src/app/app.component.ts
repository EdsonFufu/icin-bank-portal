import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'icin-bank-portal';
  username: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login']).then(() => console.log("User Is Logout"));
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('username') !== null;
  }
}
