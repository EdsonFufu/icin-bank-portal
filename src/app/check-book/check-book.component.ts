import { Component, OnInit } from '@angular/core';
import {CheckBookRequestService} from "../services/check-book-request.service";

@Component({
  selector: 'app-check-book',
  templateUrl: './check-book.component.html',
  styleUrls: ['./check-book.component.css']
})
export class CheckBookComponent implements OnInit {

  checkBookRequests:any
  constructor(private checkBookReqService:CheckBookRequestService) { }

  ngOnInit(): void {
    this.checkBookReqService.all().subscribe(data => {
      this.checkBookRequests = data
    })
  }

}
