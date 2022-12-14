import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   username: string | null;
   roles: any;

  constructor() {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");
    this.roles = sessionStorage.getItem("roles");
  }

}
