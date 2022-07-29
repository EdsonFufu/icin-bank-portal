import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization',localStorage.getItem("token") + '');
@Injectable({
  providedIn: 'root'
})

export class CheckBookRequestService {

  url:string ="http://localhost:8081/api/check-book-request"

  constructor(private http:HttpClient) { }

  all(){
    return this.http.get(this.url,{headers});
  }
  one(id:number){
    return this.http.get(this.url + "/" + id,{headers});
  }
}
