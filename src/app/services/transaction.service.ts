import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Transaction} from "../model/transaction.model";
const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', '' + localStorage.getItem('token'));
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8081/api/transaction';

  constructor(private http:HttpClient) { }

  all() {
    console.log(localStorage.getItem('token'))
    return this.http.get<Transaction[]>(this.baseUrl,{headers})
  }
  one(id:number) {
    return this.http.get<Transaction>(this.baseUrl + "/" + id,{headers})
  }

}
