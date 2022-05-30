import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) {  }
  postData(value){
    return this.http.post<any>('http://localhost:3000/login',value)
  }
}
