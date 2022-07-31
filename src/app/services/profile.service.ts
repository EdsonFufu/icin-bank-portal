import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Profile} from "../model/profile.model";
const headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization','' + localStorage.getItem("token"))
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "http://localhost:8081/api/user/profile"

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Profile>(this.url,{headers})
  }
}
