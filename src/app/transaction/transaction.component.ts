import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../services/transaction.service";
import {Transaction} from "../model/transaction.model";
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions:Transaction[]
  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
   this.transactionService.all().subscribe(response => {
      this.transactions = response
    })
  }


}
