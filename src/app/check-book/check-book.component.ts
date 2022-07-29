import { Component, OnInit } from '@angular/core';
import {CheckBookRequestService} from "../services/check-book-request.service";

@Component({
  selector: 'app-check-book',
  templateUrl: './check-book.component.html',
  styleUrls: ['./check-book.component.css']
})
export class CheckBookComponent implements OnInit {

  message:string

  checkBookRequests:any
  constructor(private checkBookReqService:CheckBookRequestService) { }

  ngOnInit(): void {
    this.checkBookReqService.all().subscribe(data => {
      this.checkBookRequests = data
    })

  }
  requestCheckBook(){
    this.checkBookReqService.request().subscribe(response => {
      this.message = response.message
    })
  }

}
