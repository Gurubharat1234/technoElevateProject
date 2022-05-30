import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htt:HttpClient, private route:Router) { }
  getData(){
    return this.htt.get<any>(`http://localhost:3000/login`)
  }
  getMentor(){
    return this.htt.get<any>(`http://localhost:3000/mentorLogin`)
  }
  getEmployee(){
    return this.htt.get<any>(`http://localhost:3000/employee`)
  }
}
