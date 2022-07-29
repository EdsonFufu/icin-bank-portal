import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Message} from "../model/message.model";
const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','' + localStorage.getItem("token"));
@Injectable({
  providedIn: 'root'
})
export class AccountTransferService {

  private baseUrl = 'http://localhost:8081/api/account/transfer';

  request:any

  constructor(private http: HttpClient){}

  transfer(source: string, destination: string,amount: string,desc: string){
    this.request = {sourceAccount: source, destinationAccount:destination, amount:amount,description:desc}
    console.log(this.request)
    return this.http.post<Message>(this.baseUrl, this.request , {headers})
  }
}
